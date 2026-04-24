import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DevCraft Studio | Freelance Development Agency",
  description:
    "DevCraft Studio builds premium web apps, SaaS products, APIs, and automation solutions for ambitious businesses.",
  keywords: [
    "freelance development studio",
    "Next.js agency",
    "React developers",
    "SaaS development",
    "API development",
  ],
  openGraph: {
    title: "DevCraft Studio",
    description:
      "Professional development studio for web, mobile, SaaS, and data solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-full bg-background text-foreground font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
