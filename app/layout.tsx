import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Global styles
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "SMP Negeri 3 - Unggul dalam Prestasi, Santun dalam Budi",
    template: "%s | SMP Negeri 3"
  },
  description: "Website resmi SMP Negeri 3. Pusat informasi akademik, kesiswaan, dan pendaftaran siswa baru.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://smpn3-anda.sch.id",
    siteName: "SMP Negeri 3",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "SMP Negeri 3",
    "url": "https://smpn3-anda.sch.id",
    "telephone": "(021) 1234-5678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pendidikan No. 123",
      "addressLocality": "Kota Pelajar",
      "addressRegion": "Jawa Barat",
      "postalCode": "12345",
      "addressCountry": "ID"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen" suppressHydrationWarning>
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
