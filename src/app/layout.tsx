import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
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
        className={`${instrument.variable} ${inter.variable} ${jetbrains.variable} grain min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
