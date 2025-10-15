import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
// import FooterNew from "@/components/FooterNew/FooterNew";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pionier",
  description:
    "Transform your business with 100+ automation experts. Specializing in Voice AI agents, CRM integrations, social media automation, and custom solutions. 150+ businesses automated successfully.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        {/* Prevent Google Translate popup */}
        <meta name="google" content="notranslate" />

        {/* Import PT Sans font and apply global medium size */}
        {/* <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

          * {
            font-family: 'Inter', sans-serif !important;
          }
        `}</style> */}
      </head>

      <body className={`${inter.variable} font-sanss antialiased bg-white flex flex-col min-h-screen`}>
        {/* Fixed Header */}
        <Header />

        {/* Main content with top padding equal to header height */}
        <main className="flex-grow pt-2 sm:pt-2">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Footer always sticks right below content */}
        {/* <FooterNew /> */}
        <Footer />
      </body>
    </html>
  );
}
