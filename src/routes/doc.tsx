import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/doc")({
  head: () => ({
    meta: [
      { title: "Document Viewer — Adam Nabeel" },
      { name: "description", content: "View document by Adam Nabeel." },
    ],
    links: [
      { rel: "icon", href: "/icon.png?v=2", type: "image/png" },
      { rel: "icon", href: "/icon.ico?v=2", type: "image/x-icon" },
      { rel: "shortcut icon", href: "/icon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/icon.png?v=2" },
    ],
  }),
  component: DocumentViewer,
});

function DocumentViewer() {
  const [file, setFile] = useState<string>("");
  const [title, setTitle] = useState<string>("Document Viewer");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const f = params.get("file");
      const t = params.get("title");
      if (f) setFile(f);
      if (t) {
        setTitle(t);
        document.title = `${t} — Adam Nabeel`;
      }
    }
  }, []);

  const rawFileUrl = file ? (file.startsWith("/") ? file : `/${file}`) : "";

  return (
    <div className="flex flex-col h-screen w-screen bg-background text-foreground overflow-hidden">
      {/* Top Header Bar */}
      <header className="h-14 border-b hairline px-4 md:px-6 flex items-center justify-between bg-background/90 backdrop-blur-md z-10 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border hairline hover:bg-secondary shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Portfolio
          </Link>
          <span className="text-sm font-semibold tracking-tight hidden sm:inline truncate max-w-md">
            {title}
          </span>
        </div>

        {rawFileUrl && (
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={rawFileUrl}
              download
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
            <a
              href={rawFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium border hairline px-3.5 py-1.5 rounded-full hover:bg-secondary transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Raw File
            </a>
          </div>
        )}
      </header>

      {/* PDF View Container */}
      <main className="flex-1 min-h-0 w-full bg-[#1a1a1a] relative flex flex-col">
        {rawFileUrl ? (
          <object
            data={rawFileUrl}
            type="application/pdf"
            className="w-full h-full block flex-1"
          >
            <iframe
              src={rawFileUrl}
              title={title}
              className="w-full h-full border-0 block"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-base font-medium">Your browser cannot display PDFs directly.</p>
                <a
                  href={rawFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm"
                >
                  Open Document in New Tab
                </a>
              </div>
            </iframe>
          </object>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-base font-medium">No document specified.</p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm"
            >
              Return to Portfolio
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
