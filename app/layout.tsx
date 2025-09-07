// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerifPro = Source_Serif_4({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-serif-pro",
});

export const metadata: Metadata = {
  title: "Dr. Usman Abubakar | Computer Science Researcher & Software Engineer",
  description:
    "PhD in Computer Science specializing in Machine Learning, Distributed Systems, and Web Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerifPro.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
