import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JunkBot LLC | Same Day Junk & Debris Removal - Tampa Area",
  description:
    "Tampa's #1 junk removal service. Same day pickup, upfront pricing, eco-friendly disposal. Call 813-401-7657 for a free quote. Mon-Sun 7AM-9PM.",
  keywords:
    "junk removal, Tampa, debris removal, same day pickup, hauling, junk bot, furniture removal, appliance removal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-darker text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
