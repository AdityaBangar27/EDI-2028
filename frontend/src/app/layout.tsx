import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocketProvider } from "@/components/providers/SocketProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrainBridge - AI-Powered Study: Students Helping Students",
  description: "Connect instantly with expert peers via video call to solve doubts, powered by smart AI matching.",
  keywords: ["education", "peer learning", "ai tutor", "video call", "student community"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`} style={{ background: '#080b1a', color: '#e8eaf6' }}>
        <SocketProvider>
          {children}
        </SocketProvider>
      </body>
    </html>
  );
}
