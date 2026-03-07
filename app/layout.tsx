import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Inter, Fira_Code, Fira_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/src/ui/SplashScreen";
import { SplashProvider } from "@/src/lib/SplashContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khaled-contact-portfolio.vercel.app/"),
  title: "Khaled Mahomud — Frontend Developer",
  description:
    "Personal portfolio of Khaled Mahomud, a Computer Science graduate and frontend developer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Khaled Mahomud",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Khaled Mahomud" }],
  creator: "Khaled Mahomud",
  icons: "/k-logo.jpg",
  openGraph: {
    type: "website",
    title: "Khaled Mahomud — Frontend Developer",
    description:
      "Personal portfolio of Khaled Mahomud, a frontend developer specializing in React, Next.js, and TypeScript.",
    siteName: "Khaled Mahomud",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Khaled Mahomud — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaled Mahomud — Frontend Developer",
    description:
      "Personal portfolio of Khaled Mahomud, a frontend developer specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${firaMono.variable} ${robotoMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-50 -translate-y-20 rounded bg-accent-cyan px-4 py-2 text-sm font-medium text-bg-primary transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SplashProvider>
          <SplashScreen />
          {children}
           <Analytics />
        </SplashProvider>
      </body>
    </html>
  );
}
