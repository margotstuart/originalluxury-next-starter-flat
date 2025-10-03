import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORIGINALLUXURY — Dubai Luxury Innovation Center",
  description: "DLIC-first landing for events, programs, studios, and member portal.",
  openGraph: {
    title: "ORIGINALLUXURY — DLIC",
    description: "Events, programs, Media Studio, Jewellery Photo Studio, and more.",
    url: "https://originalluxury.org",
    siteName: "ORIGINALLUXURY",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
