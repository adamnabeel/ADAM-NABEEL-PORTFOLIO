import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Github,
  FileText,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  ArrowUp,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Cpu,
  Rocket,
  Code2,
  Brain,
  Cloud,
  GitBranch,
  Wrench,
  Users,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Nabeel — Aerospace & Autonomous Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Adam Nabeel — ECE engineer and researcher specializing in aerospace systems, GPS-denied navigation, sensor fusion, machine learning, and autonomous vehicles.",
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/* DUMMY CONTENT — replace with real data                              */
/* ------------------------------------------------------------------ */

// TODO: replace with your name / title / intro
const PROFILE = {
  name: "Adam Nabeel",
  title: "ECE Engineer",
  intro: "Building intelligent systems for the future of autonomous technologies. Currently seeking opportunities in Embedded Systems, UAVs, Navigation, ADAS, and Intelligent Mobility.",
  location: "Bengaluru, India",
  email: "adamnabeel2004@outlook.com",

  resumeUrl: "/public/ADAM_NABEEL_RESUME.pdf",
  social: {
    github: "https://github.com/adamnabeel",
    linkedin: "https://www.linkedin.com/in/adamnabeel/",
    twitter: "https://x.com/adamnabeel2004",
  },
};

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { label: "Projects", value: 3 },
  { label: "Years of Experience", value: 1 },
  { label: "Research Papers", value: 5 },
  { label: "Certifications", value: 1 },
];

const SKILLS: { title: string; icon: React.ElementType; items: string[] }[] = [
  { title: "Programming", icon: Code2, items: ["MATLAB", "Python", "Embedded C", "MATLAB/Simulink"] },

  { title: "AI / ML", icon: Brain, items: ["Machine Learning", "Neural Networks", "Predictive Modelling", "Data Analysis"] },

  { title: "Navigation", icon: Rocket, items: ["GPS-Denied Navigation", "Sensor Fusion", "Kalman Filter", "Unscented Kalman Filter (UKF)", "State Estimation"] },

  { title: "Embedded", icon: Cpu, items: ["Arduino", "Raspberry Pi", "Microcontroller Programming", "Real-Time Systems", "Keil μVision"] },

  { title: "Simulation", icon: Wrench, items: ["MATLAB/Simulink", "Control Systems", "Dynamic System Modelling", "Vehicle Dynamics", "UAV Modelling"] },

  { title: "Communication", icon: Cloud, items: ["V2V Communication", "ADAS", "Li-Fi", "DSRC", "NS-3"] },

  { title: "Engineering Tools", icon: GitBranch, items: ["Cadence", "Solid Edge", "FFT Analysis", "Technical Documentation"] },

  { title: "Research", icon: Users, items: ["Technical Writing", "Problem Solving", "Research", "Project Leadership", "Team Collaboration"] },
];

const EXPERIENCE = [
  {
    company: "Water, Environment, Land and Livelihoods (WELL) Labs",
    logo: "/logos/WELLABS.png",
    role: "Research Study Assistant",
    duration: "November 2024 — December 2024",
    location: "India",
    summary:
      "Supported research activities involving field data collection, documentation, and analysis for studies focused on environmental and livelihood challenges.",
    stack: [
      "Research Methods",
      "Data Collection",
      "Field Analysis",
      "Documentation",
    ],
    achievements: [
      "Assisted in field research activities and structured data collection.",
      "Supported research documentation and analysis workflows.",
      "Contributed to organizing and interpreting field study information.",
    ],
  },

  {
    company: "National Institute of Technology Karnataka (NITK)",
    logo: "/logos/NITK.png",
    role: "Research Intern",
    duration: "March 2025 — April 2025",
    location: "Surathkal, Karnataka, India",
    summary:
      "Developed and evaluated DSRC-based Vehicle-to-Vehicle (V2V) communication algorithms for real-time collision avoidance and intelligent transportation systems using NS-3 and MATLAB.",
    stack: ["MATLAB", "NS-3", "DSRC", "V2V Communication"],
    achievements: [
      "Designed and simulated DSRC-based V2V communication models for collision avoidance.",
      "Developed network simulation scenarios using NS-3 for vehicular communication analysis.",
      "Performed quantitative performance evaluation and validation using MATLAB.",
    ],
  },

  {
    company: "Grapevine India",
    logo: "/logos/GRAPEVINE.png",
    role: "Event Manager Intern",
    duration: "February 2025 — April 2025",
    location: "Bengaluru, India",
    summary:
      "Managed end-to-end event operations including planning, coordination, logistics management, and on-ground execution while collaborating with multiple stakeholders.",
    stack: [
      "Event Management",
      "Operations",
      "Project Coordination",
      "Communication",
    ],
    achievements: [
      "Coordinated event planning activities including scheduling, logistics, and execution workflows.",
      "Managed communication between vendors, teams, and stakeholders to ensure smooth event delivery.",
      "Supported on-ground operations and problem-solving during live events.",
    ],
  },

  {
    company: "CSIR – National Aerospace Laboratories (NAL)",
    logo: "/logos/CSIR_NAL.png",
    role: "Research Assistant",
    duration: "June 2025 — July 2025",
    location: "Bengaluru, Karnataka, India",
    summary:
      "Developed vehicle state prediction and localization algorithms for Vehicle-to-Vehicle (V2V) communication systems using MATLAB and Python, improving positioning accuracy through sensor fusion and neural network-based estimation.",
    stack: [
      "MATLAB",
      "Python",
      "Machine Learning",
      "Sensor Fusion",
      "V2V Communication",
    ],
    achievements: [
      "Developed vehicle state prediction models for accurate position estimation in V2V communication systems.",
      "Implemented neural network-based sensor models to improve vehicle localization performance.",
      "Enhanced positioning accuracy using sensor fusion and state estimation techniques.",
    ],
  },

  {
    company: "CSIR – National Aerospace Laboratories (NAL)",
    logo: "/logos/CSIR_NAL.png",
    role: "Research Assistant",
    duration: "February 2026 — June 2026",
    location: "Bengaluru, Karnataka, India",
    summary:
      "Designed and developed GPS-denied navigation algorithms for autonomous UAVs using multi-sensor fusion, Unscented Kalman Filtering (UKF), and AI-based techniques to achieve robust real-time localization in challenging environments.",
    stack: [
      "MATLAB",
      "Python",
      "Simulink",
      "UKF",
      "Sensor Fusion",
      "Neural Networks",
    ],
    achievements: [
      "Developed UKF-based nonlinear state estimation algorithms for GPS-denied navigation.",
      "Integrated multi-sensor fusion and neural network models for robust UAV localization.",
      "Improved navigation accuracy and system reliability in GPS-denied environments through AI-assisted state estimation.",
    ],
  },

  {
    company: "MASTERVLSI – VLSI Training Institution",
    logo: "/logos/MASTERVLSI.png",
    role: "VLSI Design & Verification Intern",
    duration: "February 2026 — April 2026",
    location: "Bengaluru, Karnataka, India",
    summary:
      "Completed hands-on training in VLSI design and verification, focusing on RTL development, SystemVerilog-based verification, and UVM methodologies for industry-standard digital designs.",
    stack: [
      "SystemVerilog",
      "RTL Design",
      "UVM",
      "APB Protocol",
      "Functional Verification",
    ],
    achievements: [
      "Developed RTL designs and created SystemVerilog-based verification environments.",
      "Implemented UVM verification components including agents, drivers, monitors, and scoreboards.",
      "Designed and verified APB protocol transactions using simulation-based validation.",
    ],
  },
];

type Project = {
  title: string;
  image: string;
  media?: string[];
  tagline: string;
  role: string;
  duration: string;
  status: "Completed" | "In flight" | "Research";
  stack: string[];
  cover: string; // gradient class
  links: { github: string; paper: string };
  detail: {
    problem: string;
    background: string;
    objectives: string[];
    implementation: string;
    hardware: string[];
    software: string[];
    algorithms: string[];
    challenges: string[];
    results: string[];
    metrics: { label: string; value: string }[];
    lessons: string[];
    future: string[];
    references: string[];
  };
};

// TODO: replace each project with real content and media
const PROJECTS: Project[] = [
  {
    title: "GPS-Denied Navigation for UAV",
    image: "/projects/gps/GPS.png",
    media: [
      "/projects/gps/GPS.png",
      "/projects/gps/gps_flowchart.png",
      "/projects/gps/ukf_position.png",
      "/projects/gps/UKF_velocity.png",
      "/projects/gps/UKF_acc_bias.png",
      "/projects/gps/NN_position.png",
      "/projects/gps/NN_vel.png",
      "/projects/gps/NN_error.png",
      "/projects/gps/NN_pseudo.png",
      "/projects/gps/Final_position.png",
      "/projects/gps/Final_vel.png",
      "/projects/gps/Tables.png",
      "/projects/gps/p.png",
      "/projects/gps/v.png",
    ],

    tagline: "AI-assisted navigation using UKF and sensor fusion in GPS-denied environments.",
    role: "Research Assistant",
    duration: "2026",
    status: "Research",
    stack: ["MATLAB", "Python", "Simulink", "UKF", "Neural Networks"],
    cover: "from-emerald-200/60 via-teal-100/40 to-slate-100",
    links: {
      github: "#",
      paper: "#",
      documentation: "/projects/gps/NAL_Internship.pdf",
    },
    detail: {
      problem:
        "Autonomous UAVs experience significant navigation drift when GPS signals become unavailable, making accurate localization challenging.",
      background:
        "Developed at CSIR–National Aerospace Laboratories (NAL) to enable robust UAV navigation in GPS-denied environments using sensor fusion and artificial intelligence.",
      objectives: [
        "Develop a robust GPS-denied navigation framework.",
        "Reduce INS drift using UKF-based sensor fusion.",
        "Generate pseudo-GPS estimates using neural networks.",
      ],
      implementation:
        "Integrated an Inertial Navigation System (INS), Unscented Kalman Filter (UKF), and Neural Network model to estimate UAV position, velocity, and orientation while compensating for GPS outages.",
      hardware: ["IMU", "GPS Receiver", "Barometric Sensor"],
      software: ["MATLAB", "Simulink", "Python"],
      algorithms: ["Unscented Kalman Filter", "Sensor Fusion", "Neural Networks"],
      challenges: [
        "Accumulating INS errors during GPS outages.",
        "Generating reliable pseudo-GPS measurements for long-duration navigation.",
      ],
      results: [
        "Improved localization accuracy in GPS-denied scenarios.",
        "Successfully generated pseudo-GPS estimates for continuous navigation.",
      ],
      metrics: [
        { label: "Navigation", value: "GPS-Denied" },
        { label: "Filter", value: "UKF" },
        { label: "AI", value: "Neural Network" },
      ],
      lessons: [
        "Accurate sensor fusion significantly improves navigation robustness.",
        "AI can effectively compensate for missing navigation information.",
      ],
      future: [
        "Integrate vision-based navigation.",
        "Real-time deployment on embedded UAV hardware.",
      ],
      references: [
        "UKF and Neural Modelling Based GPS-Denied Navigation for UAV",
      ],
    },
  },

  {
    title: "Aircraft Avionics System Architecture Simulation",
    image: "/projects/avionics/aircraft.png",
    media: [
      "/projects/avionics/cert_avionics.png",
      "/projects/avionics/aircraft_label.png",
      "/projects/avionics/aircraft_control.png",
      "/projects/avionics/alt.png",
      "/projects/avionics/alt_scope.png",
      "/projects/avionics/alt_error_scope.png",
      "/projects/avionics/att_scope.png",
      "/projects/avionics/avionic_mocel.png",
      "/projects/avionics/Error_scope.png",
      "/projects/avionics/fp_model.png",
      "/projects/avionics/pitch_angle_scope.png",
    ],
    tagline: "MATLAB/Simulink simulation of aircraft navigation, guidance, and flight control systems.",
    role: "Simulation Engineer",
    duration: "2025",
    status: "Completed",
    stack: ["MATLAB", "Simulink", "Control Systems", "Aircraft Dynamics"],
    cover: "from-sky-200/60 via-cyan-100/40 to-slate-100",
    links: {
      github: "#",
      paper: "#",
      documentation: "/projects/avionics/Report_avionics.pdf",
    },
    detail: {
      problem:
        "Designing and validating aircraft avionics architectures requires extensive simulation before deployment to ensure safe and reliable flight operations.",
      background:
        "Developed a comprehensive aircraft avionics system model in MATLAB/Simulink incorporating altitude regulation, navigation, guidance, and flight path control for system-level analysis.",
      objectives: [
        "Model integrated avionics subsystems.",
        "Simulate aircraft navigation and guidance.",
        "Evaluate flight control performance under different operating conditions.",
      ],
      implementation:
        "Designed interconnected MATLAB/Simulink models representing aircraft navigation, guidance, altitude control, and flight path control. Performed system-level simulations to validate subsystem interaction and overall flight performance.",
      hardware: ["Simulation Model"],
      software: ["MATLAB", "Simulink"],
      algorithms: [
        "Control System Design",
        "Dynamic System Modelling",
        "Flight Path Simulation",
      ],
      challenges: [
        "Integrating multiple avionics subsystems into a unified simulation.",
        "Maintaining stable aircraft response across operating conditions.",
      ],
      results: [
        "Successfully simulated complete aircraft avionics architecture.",
        "Validated navigation, guidance, and flight control performance through system-level simulations.",
      ],
      metrics: [
        { label: "Platform", value: "MATLAB/Simulink" },
        { label: "Domain", value: "Avionics" },
        { label: "Systems", value: "Navigation & Guidance" },
      ],
      lessons: [
        "System-level integration is essential for reliable avionics development.",
        "Simulation enables rapid validation before implementation.",
      ],
      future: [
        "Extend the model with fault-tolerant flight control.",
        "Integrate advanced sensor fusion for autonomous flight.",
      ],
      references: [
        "Aircraft Avionics System Architecture Simulation Project",
      ],
      media: [
        "/projects/avionics/cert_avionics.png",
        "/projects/avionics/aircraft_label.png",
        "/projects/avionics/aircraft_control.png",
      ],
    },
  },

  {
    title: "Multi-Source Vibration Modelling of Elevator Systems",
    image: "/projects/elevator/3dof.png",
    media: [
      "/projects/elevator/3dof.png",
      "/projects/elevator/sim_model.png",
      "/projects/elevator/graph1.png",
      "/projects/elevator/graph2.png",
      "/projects/elevator/graph3.png",
      "/projects/elevator/table1.png",
    ],
    tagline: "Dynamic modelling and predictive maintenance using MATLAB/Simulink.",
    role: "Research Engineer",
    duration: "2026",
    status: "Completed",
    stack: ["MATLAB", "Simulink", "FFT Analysis"],
    cover: "from-slate-200/60 via-slate-100 to-emerald-50",
    links: {
      github: "#",
      paper: "#",
      documentation: "/projects/elevator/ELEVATOR.pdf",
    },
    detail: {
      problem:
        "Real-world elevator fault data is difficult to obtain, limiting predictive maintenance research.",
      background:
        "Developed a three-degree-of-freedom dynamic model capable of simulating multiple operating conditions and generating vibration datasets for machine learning.",
      objectives: [
        "Develop a realistic elevator dynamic model.",
        "Generate synthetic vibration datasets.",
        "Support future AI-based fault diagnosis.",
      ],
      implementation:
        "Designed a 3-DOF mathematical model in MATLAB/Simulink, simulated multiple fault conditions, and extracted frequency-domain features using FFT.",
      hardware: ["Simulation Model"],
      software: ["MATLAB", "Simulink"],
      algorithms: ["State-Space Modelling", "FFT Analysis"],
      challenges: [
        "Accurately modelling multiple excitation sources.",
        "Generating representative synthetic fault data.",
      ],
      results: [
        "Successfully generated vibration datasets for multiple operating conditions.",
        "Created a simulation framework for predictive maintenance research.",
      ],
      metrics: [
        { label: "Model", value: "3-DOF" },
        { label: "Analysis", value: "FFT" },
        { label: "Platform", value: "MATLAB" },
      ],
      lessons: [
        "Accurate system modelling is critical for synthetic data generation.",
      ],
      future: [
        "Train deep learning models for automatic fault classification.",
      ],
      references: [
        "Multi-Source Vibration Modelling of Elevator Systems",
      ],
    },
  },

  {
    title: "Li-Fi Enabled Radar-Based Collision Prevention System",
    image: "/projects/lifi/lifi.png",
    media: [
      "/projects/lifi/lifi.png",
      "/projects/lifi/certifi.png",
      "/projects/lifi/fig1.png",
      "/projects/lifi/fig2.png",
      "/projects/lifi/fig3.png",
      "/projects/lifi/fig4.png",
      "/projects/lifi/fig5.png",
      "/projects/lifi/fig6.png",
    ],
    tagline: "ADAS prototype integrating Li-Fi, radar, and ultrasonic sensing.",
    role: "Project Lead",
    duration: "2025",
    status: "Completed",
    stack: ["Arduino", "Embedded C", "Li-Fi", "Radar", "Ultrasonic Sensors"],
    cover: "from-teal-100/60 via-slate-50 to-slate-100",
    links: {
      github: "#",
      paper: "#",
      documentation: "/projects/lifi/lifi_report.pdf",
    },
    detail: {
      problem:
        "Conventional collision avoidance systems have limitations in communication latency and obstacle detection accuracy.",
      background:
        "Designed an ADAS prototype integrating Li-Fi communication, radar, and ultrasonic sensors for intelligent collision prevention.",
      objectives: [
        "Develop real-time obstacle detection.",
        "Enable reliable V2V communication using Li-Fi.",
        "Implement automatic emergency braking.",
      ],
      implementation:
        "Integrated radar and ultrasonic sensors with Li-Fi communication and embedded control algorithms using Arduino and Embedded C for real-time collision avoidance.",
      hardware: [
        "Arduino",
        "Radar Sensor",
        "Ultrasonic Sensor",
        "Li-Fi Module",
      ],
      software: ["Embedded C", "Arduino IDE"],
      algorithms: [
        "Obstacle Detection",
        "Emergency Braking Logic",
        "Li-Fi Communication",
      ],
      challenges: [
        "Synchronizing multiple sensor inputs.",
        "Reliable communication during vehicle movement.",
      ],
      results: [
        "Successfully demonstrated obstacle detection and automatic emergency braking.",
        "Validated Li-Fi-supported V2V communication.",
      ],
      metrics: [
        { label: "Communication", value: "Li-Fi" },
        { label: "Domain", value: "ADAS" },
        { label: "Platform", value: "Arduino" },
      ],
      lessons: [
        "Multi-sensor integration improves system reliability.",
      ],
      future: [
        "Integrate AI-based object detection and autonomous driving features.",
      ],
      references: [
        "High-Precision Vehicle Localization Using Li-Fi Supported V2V Communication and Sensor Fusion",
      ],
    },
  },
];

const PUBLICATIONS = [
  {
    title: "Machine Learning-Enhanced EKF for Vehicle Localization under Sparse Observations",
    venue: "International Conference on Advanced Computing Systems and Intelligent Communication Engineering (ICACSICE 2026)",
    year: "2026",
    doi: "Conference Paper",
    pdf: "/publications/conf.pdf",
    authors: "Adam Nabeel, G. Selvaraj, M. Mohamed, M. Pappa",
    abstract:
      "Presented a ML-enhanced Extended Kalman Filter framework for improving vehicle localization accuracy under sparse data.",
  },
  {
    title: "High-Precision Vehicle Localization Using Li-Fi Supported V2V Communication and Sensor Fusion",
    venue: "TIJER – International Research Journal",
    year: "2026",
    doi: "Journal Publication",
    pdf: "/publications/journal.pdf",
    authors: "Adam Nabeel, Arjun NR, Vijay, Charan Raj JK, Abhinash Panda",
    abstract:
      "Proposed a high-precision vehicle localization framework with LiDAR and ABS system.",
  },
  {
    title: "Ergonomic Paper Clip Design",
    venue: "Indian Patent",
    year: "2025",
    doi: "Patent Granted",
    pdf: "/publications/patent final.pdf",
    authors: "Adam Nabeel",
    abstract:
      "Designed an ergonomic paper clip focused on improving user comfort, handling efficiency, and practical usability through an optimized geometric structure.",
  },
  {
    title: "UKF and Neural Modelling Based GPS-Denied Navigation for UAV",
    venue: "Conference Proceedings",
    year: "2026",
    doi: "Under Review",
    authors: "Adam Nabeel, M. Mohamed",
    abstract:
      "Presents an AI-assisted GPS-denied navigation framework integrating an Unscented Kalman Filter (UKF), neural networks, and multi-sensor fusion for robust UAV localization in challenging environments.",
  },
  {
    title: "GPS-Denied Navigation Using Adaptive Nonlinear Filter and Neural Network",
    venue: "Journal of Guidance, Control, and Dynamics (JGCD)",
    year: "2026",
    doi: "Under Review",
    authors: "Adam Nabeel, M. Mohamed",
    abstract:
      "Investigates adaptive nonlinear filtering and neural network-based error modelling to improve navigation accuracy and robustness for autonomous UAVs operating without GPS.",
  },
];

const CERTIFICATIONS = [
  { name: "MATLAB Onramp : Matlab Basics", issuer: "Mathworks", date: "2025", certificate: "/certificates/mathwork.pdf" },

];

const AWARDS = [
  { year: "2019", title: "Silver Medalist", org: "Regional-Level Football Tournament" },
  { year: "2024", title: "Represented CMRIT", org: "VTU State-Level Athletic Meet" },
  { year: "2022 – 2026", title: "Class Representative", org: "Served for 8 Consecutive Semesters" },
  { year: "2022 – 2026", title: "Event Coordinator & Host", org: "CULTURA, CMR Institute of Technology" },
  { year: "2024 – 2025", title: "Event Manager", org: "Live Concerts & Entertainment Events" },
];

const TESTIMONIALS = [
  {
    name: "Dr. M. Mohamed",
    role: "Research Scientist, CSIR – National Aerospace Laboratories (NAL)",
    quote:
      "Research Guide for GPS-Denied UAV Navigation, Sensor Fusion, Unscented Kalman Filter (UKF), and AI-based State Estimation research.",
  },
  {
    name: "Dr. Kiran M.",
    role: "Faculty Mentor, National Institute of Technology Karnataka (NITK)",
    quote:
      "Research Internship Supervisor for DSRC-based Vehicle-to-Vehicle (V2V) Communication, NS-3 Simulation, and Intelligent Transportation Systems.",
  },
  {
    name: "Dr. Pappa M",
    role: "Head of Department, Electronics & Communication Engineering, CMR Institute of Technology",
    quote:
      "Academic Mentor for undergraduate research, publications, and major project.",
  },
  {
    name: "Dr. G. Selvaraj",
    role: "Head of Department, Advanced Driver Assistance Systems, UST",
    quote:
      "Project Mentor for Vehicle Localization, Machine Learning, Kalman Filtering, and Research Publications.",
  },
];

const COMPANIES = [
  {
    name: "CSIR – National Aerospace Laboratories (NAL)",
    logo: "/logos/CSIR_NAL.png",
  },
  {
    name: "Tata Elxsi",
    logo: "/logos/TATA_ELXSI.png",
  },
  {
    name: "Schindler",
    logo: "/logos/SCHINDLER.png",
  },
  {
    name: "National Institute of Technology Karnataka (NITK)",
    logo: "/logos/NITK.png",
  },
  {
    name: "Grapevine",
    logo: "/logos/GRAPEVINE.png",
  },
  {
    name: "WellLabs",
    logo: "/logos/WELLABS.png",
  },
  {
    name: "MASTERVLSI",
    logo: "/logos/MASTERVLSI.png",
  },
];

/* ------------------------------------------------------------------ */
/* Reusable primitives                                                 */
/* ------------------------------------------------------------------ */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl" data-aos="fade-up">
      <div className="eyebrow flex items-center gap-2">
        <span className="h-px w-8 bg-current opacity-30" />
        {eyebrow}
      </div>
      <h2 className="h-section mt-4">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.n).toString();
      },
    });
    return () => {
      tween.kill();
    };
  }, [value]);
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span ref={ref} className="text-5xl font-medium tracking-tight">
          0
        </span>
        <span className="text-2xl text-accent">+</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Nav({ active }: { active: string }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid
        ? "bg-background/80 backdrop-blur-xl border-b hairline"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-semibold tracking-[0.15em] text-sm uppercase"
        >
          ADAM <span className="text-accent">NABEEL</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-sm transition-colors ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-1.5 rounded-full border hairline px-4 py-2 hover:bg-secondary transition-colors"
          >
            Resume <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border hairline"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t hairline bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="text-sm py-1 text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1.5 rounded-full border hairline px-4 py-2 hover:bg-secondary transition-colors"
            >
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 12, opacity: 0, duration: 0.6 })
        .from(".hero-title span", { y: 40, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.3")
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-cta > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .from(".hero-portrait", { scale: 0.96, opacity: 0, duration: 1.1, ease: "power2.out" }, "-=0.8")
        .from(".hero-meta > *", { y: 10, opacity: 0, duration: 0.5, stagger: 0.06 }, "-=0.4");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24"
    >
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 12%, transparent), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="container-x grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7">
          <div className="hero-eyebrow eyebrow flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />

            Engineering the Future of Autonomy
          </div>
          <h1 className="hero-title h-display mt-6 leading-[0.9] tracking-tight">
            <span className="block font-medium">
              From <span className="italic font-light">Research</span>
            </span>

            <span className="block font-semibold">
              to <span className="text-accent">Reality.</span>
            </span>
          </h1>
          <p className="hero-sub mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {PROFILE.intro}
          </p>
          <div className="hero-cta mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Explore projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1.5 rounded-full border hairline px-4 py-2 hover:bg-secondary transition-colors"
            >
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact me →
            </a>
          </div>


        </div>

        <div className="lg:col-span-5">
          <div className="hero-portrait relative aspect-[4/5] max-w-md mx-auto">
            <div
              className="absolute inset-0 rounded-3xl border hairline overflow-hidden"
              style={{
                background:
                  "linear-gradient(140deg, color-mix(in oklab, var(--accent) 8%, transparent), var(--surface) 60%)",
              }}
            >
              <img
                src="/images/profile_pic.png"
                alt="Adam Nabeel"
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-muted-foreground">

                <span>{PROFILE.location}</span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-surface border hairline px-4 py-3 shadow-sm">

              <div className="text-[10px] eyebrow">Currently</div>
              <div className="text-sm mt-0.5">Open to Work</div>

            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="Driven by Curiosity. Built Through Research." />
        </div>
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground" data-aos="fade-up">
          <p>
            I&apos;m an Electronics and Communication Engineering graduate with a passion for
            aerospace systems, autonomous navigation, and intelligent transportation. My research
            experience at CSIR–National Aerospace Laboratories (NAL) and the National Institute of
            Technology Karnataka (NITK) has focused on GPS-denied navigation, sensor fusion,
            vehicle localization, and machine learning for autonomous systems.
          </p>

          <p>
            I enjoy solving complex engineering problems by combining strong mathematical
            foundations with practical implementation. Using MATLAB, Simulink, Python, and
            embedded systems, I develop intelligent algorithms for state estimation, control
            systems, autonomous vehicles, and UAV navigation while translating research into
            real-world engineering solutions.
          </p>
        </div>
      </div>

      <div className="container-x mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t hairline">
        {STATS.map((s) => (
          <div key={s.label} data-aos="fade-up">
            <Counter value={s.value} label={s.label} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section bg-secondary/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Technical Arsenal"
          title="Built with precision. Engineered to perform."
          description="A focused collection of tools and technologies used across simulation, embedded systems, machine learning, and autonomous engineering."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                data-aos="fade-up"
                className="group rounded-2xl border hairline bg-surface p-6 transition-all duration-300 hover:border-foreground/20 hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-sm font-medium">{cat.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs rounded-full border hairline px-2.5 py-1 text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Experience"
          title="Research, development, and engineering."
          description="Exploring complex engineering challenges through mathematical modeling, simulation, embedded development, and AI-driven approaches."
        />
        <div className="mt-16 relative">
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="space-y-4">
            {EXPERIENCE.map((e, i) => {
              const isOpen = open === i;
              return (
                <div key={e.company} data-aos="fade-up" className="relative pl-10 md:pl-14">
                  <div className="absolute left-1 md:left-2 top-6 h-4 w-4 rounded-full bg-background border-2 border-accent" />
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left rounded-2xl border hairline bg-surface p-6 md:p-8 transition-all hover:border-foreground/20"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          {/* TODO: replace with real logo */}
                          <img
                            src={e.logo}
                            alt={e.company}
                            className="h-8 w-8 object-contain rounded-md"
                          />
                          <div>
                            <div className="text-xs eyebrow">{e.company}</div>
                            <h3 className="text-lg font-medium mt-0.5">{e.role}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground text-right space-y-1">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Calendar className="h-3 w-3" /> {e.duration}
                        </div>
                        <div className="flex items-center gap-1.5 justify-end">
                          <MapPin className="h-3 w-3" /> {e.location}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{e.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.stack.map((s) => (
                        <span key={s} className="text-[11px] rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-accent inline-flex items-center gap-1">
                      {isOpen ? "Hide details" : "View details"}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>

                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-6 mt-6 border-t hairline">
                          <div className="eyebrow mb-3">Contributions</div>
                          <ul className="space-y-2">
                            {e.achievements.map((a) => (
                              <li key={a} className="text-sm text-muted-foreground flex gap-3">
                                <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-current shrink-0" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const currentIndex = selectedImage
    ? p.media?.findIndex((img) => img === selectedImage) ?? -1
    : -1;

  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowRight") {
        if (currentIndex < (p.media?.length ?? 0) - 1) {
          setSelectedImage(p.media![currentIndex + 1]);
        }
      }

      if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          setSelectedImage(p.media![currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex, p.media]);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      gsap.fromTo(
        bodyRef.current.querySelectorAll(".proj-block"),
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" },
      );
    }
  }, [open]);

  return (
    <article
      data-aos="fade-up"
      className="group rounded-3xl border hairline bg-surface overflow-hidden transition-all hover:border-foreground/20"
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className={`md:col-span-2 relative aspect-[4/3] md:aspect-auto bg-gradient-to-br ${p.cover}`}>
          {/* TODO: replace with real project imagery */}
          <img
            src={p.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] eyebrow rounded-full bg-background/80 backdrop-blur px-2.5 py-1 border hairline">
              {String(index + 1).padStart(2, "0")} / {p.status}
            </span>
          </div>
        </div>
        <div className="md:col-span-3 p-8 md:p-10 flex flex-col">
          <h3 className="text-2xl font-medium tracking-tight">{p.title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{p.tagline}</p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
            <div>
              <div className="eyebrow">Role</div>
              <div className="mt-1">{p.role}</div>
            </div>
            <div>
              <div className="eyebrow">Duration</div>
              <div className="mt-1">{p.duration}</div>
            </div>
            <div>
              <div className="eyebrow">Status</div>
              <div className="mt-1">{p.status}</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="text-[11px] rounded-full border hairline px-2.5 py-1 text-muted-foreground">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {open ? "Close case study" : "View case study"}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

          </div>
        </div>
      </div>

      <div
        className="grid transition-all duration-500 ease-out border-t hairline"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", borderTopWidth: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <div ref={bodyRef} className="p-8 md:p-12 space-y-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="proj-block">
                <div className="eyebrow">Problem</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.detail.problem}</p>
              </div>
              <div className="proj-block">
                <div className="eyebrow">Background</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.detail.background}</p>
              </div>
            </div>

            <div className="proj-block">
              <div className="eyebrow">Objectives</div>
              <ul className="mt-4 grid md:grid-cols-3 gap-4">
                {p.detail.objectives.map((o, i) => (
                  <li key={o} className="rounded-xl border hairline p-4">
                    <div className="text-xs text-accent">0{i + 1}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{o}</div>
                  </li>
                ))}
              </ul>
            </div>



            <div className="proj-block">
              <div className="eyebrow">Implementation</div>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{p.detail.implementation}</p>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {(
                  [
                    ["Hardware", p.detail.hardware],
                    ["Software", p.detail.software],
                    ["Algorithms", p.detail.algorithms],
                  ] as const
                ).map(([k, arr]) => (
                  <div key={k}>
                    <div className="text-xs text-foreground font-medium">{k}</div>
                    <ul className="mt-2 space-y-1">
                      {arr.map((v) => (
                        <li key={v} className="text-sm text-muted-foreground">
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="proj-block grid md:grid-cols-2 gap-10">
              <div>
                <div className="eyebrow">Challenges</div>
                <ul className="mt-3 space-y-2">
                  {p.detail.challenges.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground">— {c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">Results</div>
                <ul className="mt-3 space-y-2">
                  {p.detail.results.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground">— {r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="proj-block">
              <div className="eyebrow">Performance</div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {p.detail.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border hairline p-5">
                    <div className="text-2xl font-medium tracking-tight text-accent">{m.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="proj-block grid md:grid-cols-2 gap-10">
              <div>
                <div className="eyebrow">Lessons</div>
                <ul className="mt-3 space-y-2">
                  {p.detail.lessons.map((l) => (
                    <li key={l} className="text-sm text-muted-foreground">— {l}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">Future work</div>
                <ul className="mt-3 space-y-2">
                  {p.detail.future.map((l) => (
                    <li key={l} className="text-sm text-muted-foreground">— {l}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="proj-block">
              <div className="eyebrow">Gallery</div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {p.media?.map((img, i) => (

                  <img
                    key={i}
                    src={img}
                    alt={`${p.title} ${i + 1}`}
                    onClick={() => setSelectedImage(img)}
                    className="
                      aspect-video
                      w-full
                      object-cover
                      rounded-xl
                      border
                      hairline
                      cursor-pointer
                      transition
                      duration-300
                      hover:scale-105
                      hover:shadow-xl
        "
                  />

                ))}

              </div>
            </div>

            <div className="proj-block flex flex-wrap gap-3 pt-4 border-t hairline">


              <a
                href={p.links.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm hover:text-accent"
              >
                <FileText className="h-4 w-4" />
                Documentation
              </a>
            </div>

            <div className="proj-block">
              <div className="eyebrow">References</div>
              <ul className="mt-3 space-y-1">
                {p.detail.references.map((r) => (
                  <li key={r} className="text-sm text-muted-foreground">— {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[80vw] max-w-5xl rounded-2xl bg-[#111] p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-white text-black text-xl font-bold shadow-lg hover:scale-110 transition"
            >
              ×
            </button>

            {/* Previous */}
            {currentIndex > 0 && (
              <button
                onClick={() => setSelectedImage(p.media![currentIndex - 1])}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 text-white text-3xl hover:bg-black transition"
              >
                ‹
              </button>
            )}

            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src={selectedImage}
                alt=""
                className="max-h-[65vh] w-auto rounded-xl object-contain"
              />
            </div>

            {/* Next */}
            {currentIndex < (p.media?.length ?? 0) - 1 && (
              <button
                onClick={() => setSelectedImage(p.media![currentIndex + 1])}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 text-white text-3xl hover:bg-black transition"
              >
                ›
              </button>
            )}

            {/* Thumbnails */}
            <div className="mt-5 flex justify-center gap-2 overflow-x-auto pb-2">
              {p.media?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`h-14 w-20 object-cover rounded-lg cursor-pointer border-2 transition
              ${img === selectedImage
                      ? "border-cyan-400"
                      : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="mt-3 text-center text-sm text-gray-400">
              {currentIndex + 1} / {p.media?.length}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section bg-secondary/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Case Studies"
          title="Industrial work, explored in depth."
          description="A deep dive into the systems I've designed — covering the problem, approach, implementation, results, and lessons learned along the way."
        />
        <div className="mt-16 space-y-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section">
      <div className="container-x">
        <SectionHeader eyebrow="Research" title="Publications" />
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {PUBLICATIONS.map((p) => (
            <article
              key={p.title}
              data-aos="fade-up"
              className="group rounded-2xl border hairline bg-surface p-6 flex flex-col transition-all hover:border-foreground/20 hover:-translate-y-0.5"
            >
              <div className="eyebrow flex items-center justify-between">
                <span>{p.venue}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {p.abstract}
              </p>
              <div className="mt-4 text-xs text-muted-foreground">{p.authors}</div>
              <div className="mt-6 pt-4 border-t hairline flex items-center justify-between text-xs">
                <span className="text-muted-foreground">DOI: {p.doi}</span>
                <a
                  href={p.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  View Paper
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section bg-secondary/40">
      <div className="container-x">
        <SectionHeader eyebrow="Certifications" title="Continued study." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.name}
              data-aos="fade-up"
              className="rounded-2xl border hairline bg-surface p-6 flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-medium leading-snug">{c.name}</h3>
                <div className="mt-1 text-xs text-muted-foreground">
                  {c.issuer} · {c.date}
                </div>
                <div className="mt-3 text-[11px] text-muted-foreground flex items-center justify-between gap-2">
                  <span></span>
                  <a
                    href={c.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-0.5"
                  >
                    Verify <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="section">
      <div className="container-x">
        <SectionHeader eyebrow="Recognition" title="Awards & honors." />
        <div className="mt-16 divide-y divide-border border-y hairline">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              data-aos="fade-up"
              className="grid grid-cols-12 items-center py-6 gap-4 group hover:bg-secondary/40 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="col-span-2 text-sm text-muted-foreground">{a.year}</div>
              <div className="col-span-7 text-base font-medium">{a.title}</div>
              <div className="col-span-3 text-sm text-muted-foreground text-right">{a.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const active = TESTIMONIALS[i];
  return (
    <section className="section bg-secondary/40">
      <div className="container-x max-w-3xl text-center">
        <Quote className="h-8 w-8 text-accent mx-auto" />
        <blockquote
          key={i}
          className="mt-8 text-2xl md:text-3xl font-light leading-relaxed tracking-tight animate-[fade-in_0.5s_ease-out]"
        >
          &ldquo;{active.quote}&rdquo;
        </blockquote>
        <div className="mt-8 text-sm">
          <div className="font-medium">{active.name}</div>
          <div className="text-muted-foreground">{active.role}</div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all ${idx === i ? "w-8 bg-foreground" : "w-4 bg-border"
                }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }

    setSending(false);
  };

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <section id="contact" className="section">
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something worth building."
            description="I'm always excited to connect with professionals, recruiters, and researchers who are passionate about autonomous systems, embedded software, UAVs, ADAS and intelligent mobility. If you have an opportunity, collaboration, or project in mind, Lets connect."
          />
          <div className="mt-10 space-y-3 text-sm">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 group"
            >
              <Mail className="h-4 w-4 text-accent" />
              <span className="group-hover:underline">{PROFILE.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{PROFILE.location}</span>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="mt-8 flex items-center gap-3">
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border hairline flex items-center justify-center hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border hairline flex items-center justify-center hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={PROFILE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border hairline flex items-center justify-center hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <form
          className="lg:col-span-7 space-y-5"
          data-aos="fade-up"
          onSubmit={sendEmail}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <Field
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <Field
            label="Message"
            name="message"
            textarea
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          {success && (
            <p className="mt-3 text-sm font-medium text-green-700 dark:text-green-400">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  value,
  onChange,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm">{label}</span>

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={6}
          className="w-full rounded-xl border hairline bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border hairline bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
        />
      )}
    </label>
  );
}

function Marquee() {
  const logos = [...COMPANIES, ...COMPANIES];

  return (
    <section aria-label="Companies" className="border-t hairline py-16 overflow-hidden">
      <div className="container-x mb-10">
        <div className="eyebrow text-center">Selected Collaborators</div>
      </div>

      <div className="group relative">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex items-center justify-center px-14 py-4 min-w-[180px]"
            >
              <img
                src={company.logo}
                alt={company.name}
                title={company.name}
                className="h-14 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="container-x py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-medium tracking-tight">{PROFILE.name}</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            {PROFILE.title} — Embedded Systems • Autonomous Systems • AI
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex md:justify-end items-start gap-3">
          <div className="mt-8 flex items-center gap-3">
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border hairline flex items-center justify-center hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border hairline flex items-center justify-center hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={PROFILE.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border hairline flex items-center justify-center hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="container-x py-6 flex items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-foreground">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      ref.current.style.transform = `scaleX(${Math.max(0, Math.min(1, p))})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-0.5 bg-transparent">
      <div ref={ref} className="h-full bg-accent origin-left" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 flex items-center justify-center ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

/* ------------------------------------------------------------------ */

function Portfolio() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });

    // Section reveal — gentle stagger on section headers
    const st: ScrollTrigger[] = [];
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (!el) return;
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) setActive(n.id);
        },
      });
      st.push(trigger);
    });

    return () => {
      st.forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="relative">
      <ScrollProgress />
      <Nav active={active} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Awards />
      <Testimonials />
      <Contact />
      <Footer />
      <Marquee />
      <BackToTop />
    </main>
  );
}
