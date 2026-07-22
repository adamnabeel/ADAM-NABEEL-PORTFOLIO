import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowLeft, ExternalLink, FileText } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Adam Nabeel — Resume" },
      { name: "description", content: "Resume of Adam Nabeel - Aerospace & Autonomous Systems Engineer." },
    ],
    links: [
      { rel: "icon", href: "/icon.png?v=2", type: "image/png" },
      { rel: "icon", href: "/icon.ico?v=2", type: "image/x-icon" },
      { rel: "shortcut icon", href: "/icon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/icon.png?v=2" },
    ],
  }),
  component: ResumeViewer,
});

function ResumeViewer() {
  const pdfUrl = "/ADAM_NABEEL_RESUME.pdf";

  return (
    <div className="flex flex-col h-screen w-screen bg-background text-foreground overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b hairline px-4 md:px-6 flex items-center justify-between bg-background/90 backdrop-blur-md z-10 shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border hairline hover:bg-secondary shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Portfolio
          </Link>
          <span className="text-sm font-semibold tracking-tight hidden sm:inline">
            Adam Nabeel — Resume
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={pdfUrl}
            download="ADAM_NABEEL_RESUME.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-3.5 py-1.5 rounded-full transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Download PDF
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium border hairline px-3.5 py-1.5 rounded-full hover:bg-secondary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Raw File
          </a>
        </div>
      </header>

      {/* PDF View Container */}
      <main className="flex-1 min-h-0 w-full bg-[#1a1a1a] relative flex flex-col">
        <object
          data={pdfUrl}
          type="application/pdf"
          className="w-full h-full block flex-1"
        >
          <iframe
            src={pdfUrl}
            title="Adam Nabeel Resume"
            className="w-full h-full border-0 block"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-base font-medium">Your browser cannot display PDFs directly.</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm"
              >
                Open Resume in New Tab
              </a>
            </div>
          </iframe>
        </object>
      </main>
    </div>
  );
}
