export type ProjectCategory = "app" | "website" | "web-app";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  projectUrl?: string;
  category: ProjectCategory;
};

export const projectsData: ProjectItem[] = [
  {
    title: "Egg-Bucket",
    description:
      "Full-stack e-commerce platform with customer and admin workflows, authentication, cart-to-checkout, and order tracking.",
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    image: "/portfolio/egg-bucket.png",
    projectUrl: "https://www.eggbucket.in",
    category: "web-app",
  },
  {
    title: "Notify",
    description:
      "Backend-focused reminder and notification app with scheduled triggers, Twilio SMS delivery, and documented REST APIs.",
    tags: ["Node.js", "MongoDB", "Twilio", "REST API"],
    image: "/portfolio/notify-preview.svg",
    category: "web-app",
  },
  {
    title: "Sales Trends Analysis (EDA)",
    description:
      "Data analytics project for retail sales trends using SQL extraction and Python-based exploratory analysis and visualization.",
    tags: ["Python", "Pandas", "SQL", "Matplotlib"],
    image: "/portfolio/sales-eda-preview.svg",
    category: "web-app",
  },
  {
    title: "Patient Assist",
    description:
      "Medical records management web app with doctor/patient auth, diagnostics tracking, and PDF/Excel export support.",
    tags: ["Next.js", "React", "MongoDB", "JWT"],
    image: "/portfolio/patient-assist-preview.png",
    category: "website",
  },
  {
    title: "KiyaBook",
    description:
      "Owner-focused rent management app for property tracking, revenue monitoring, and quick tenant operations.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    image: "/portfolio/kiyabook-preview.png",
    projectUrl: "https://github.com/sarojkum822/RMS-online-",
    category: "app",
  },
  {
    title: "Kirayadaar",
    description:
      "Tenant-side rental app for rent status, utility usage, maintenance flow, and payment reminders in one dashboard.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    image: "/portfolio/kirayadaar-preview.png",
    projectUrl: "https://github.com/sarojkum822/RMS-online-",
    category: "app",
  },
  {
    title: "Portfolio Mobile App with Resume Builder",
    description:
      "React Native app combining portfolio showcase and custom resume builder with editable sections and PDF export.",
    tags: ["React Native", "TypeScript", "Expo"],
    image: "/portfolio/resume-builder-preview.svg",
    category: "app",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern portfolio site built with smooth motion effects, responsive layout, and contact workflow.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio/personal-portfolio-preview.svg",
    category: "website",
  },
];
