import {
  AppWindow,
  BarChart3,
  Database,
  Paintbrush2,
  ServerCog,
  Smartphone,
} from "lucide-react";

export const servicesData = [
  {
    title: "App Development",
    description:
      "High-performance iOS and Android apps built with modern cross-platform stacks.",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "Mobile CI/CD"],
  },
  {
    title: "Web Development",
    description:
      "Fast, conversion-focused websites and platforms using React and Next.js architecture.",
    icon: AppWindow,
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS products from MVP to scale, with multi-tenant and billing-ready systems.",
    icon: Database,
    tags: ["SaaS Architecture", "Auth", "Subscriptions"],
  },
  {
    title: "Excel & Data Solutions",
    description:
      "Automations and reporting systems that turn manual workflows into data-driven pipelines.",
    icon: BarChart3,
    tags: ["VBA", "Power BI", "Dashboards"],
  },
  {
    title: "API Development",
    description:
      "Stable APIs for product backends and partner integrations with strong performance baselines.",
    icon: ServerCog,
    tags: ["REST", "GraphQL", "Node.js"],
  },
  {
    title: "Website Redesign",
    description:
      "Design and engineering refreshes that improve clarity, trust, speed, and business outcomes.",
    icon: Paintbrush2,
    tags: ["UX Refresh", "Performance", "Brand Consistency"],
  },
];
