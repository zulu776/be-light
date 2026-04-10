import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Header} from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer"

import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButtom/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Be Light",
   icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton/>
      </body>
    </html>
  );
}
