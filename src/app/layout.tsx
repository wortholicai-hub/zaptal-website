import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
// import FooterNew from "@/components/FooterNew/FooterNew";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer/Footer";
import { Doto, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
});

export const metadata: Metadata = {
  title: "Zaptal | AI Receptionist and Automation Platform for Clinics",
  description:
    "Zaptal helps dental clinics, medical practices, wellness centers, and healthcare businesses answer calls, book appointments, automate follow-ups, recover missed calls, and grow with AI-powered communication workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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

      <body className={`${inter.variable} ${doto.variable} font-sans antialiased bg-white flex flex-col min-h-screen overflow-x-hidden`}>
        <Header />

        <main className="flex-grow pt-2 sm:pt-2 overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}
