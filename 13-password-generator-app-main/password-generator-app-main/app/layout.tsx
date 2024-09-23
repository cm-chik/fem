import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});
import "./globals.css";

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Next.js Password Generator for frontend mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SpaceMono.variable}`}>{children}</body>
    </html>
  );
}
