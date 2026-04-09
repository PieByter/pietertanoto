import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pieter Tanoto's Portfolio",
  description:
    "Personal portfolio of Pieter Tanoto, a Software Developer & Engineer specializing in modern web technologies.",
  keywords: ["Pieter Tanoto", "Software Developer", "Engineer", "Portfolio", "Android", "Web Development", "Node.js", "Kotlin", "Java", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Pieter Tanoto" }],
  openGraph: {
    title: "Pieter Tanoto",
    description:
      "Personal portfolio of Pieter Tanoto, a Software Developer & Engineer.",
    url: "https://pietertanoto.vercel.app",
    siteName: "Pieter Tanoto Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pieter Tanoto",
    description: "Personal portfolio of Pieter Tanoto, a Software Developer & Engineer.",
    creator: "@piers_tno",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
