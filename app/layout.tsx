import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "QR Health | Traditional Chinese Medicine Clinic",
  description:
    "QR Health offers acupuncture, Origin Point Medicine, cupping, acupressure, Reiki, sound therapy and moxibustion — bespoke holistic treatment plans to restore balance and renew wellbeing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-warm-grey`}>{children}</body>
    </html>
  );
}
