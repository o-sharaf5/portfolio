import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Sharaf — Full-Stack Web Engineer",
  description:
    "TypeScript · React · Next.js. Selected work: PostPulse, BioLink Pro, DocCraft, SigFlow — every project live and open source.",
  openGraph: {
    title: "Omar Sharaf — Full-Stack Web Engineer",
    description:
      "Selected work: PostPulse, BioLink Pro, DocCraft, SigFlow — every project live and open source.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${spaceGrotesk.variable} ${jetbrains.variable} grain min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
