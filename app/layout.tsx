import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTopBar from "@/components/layout/HeaderTopBar";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Queen Street Dental - Tottenham's Leading Dental Team",
  description: "General, Cosmetic, & Implant Dentistry. Serving Tottenham and New Tecumseth for over 50 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-gray-800 bg-white`}>
        <HeaderTopBar />
        <MainNav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
