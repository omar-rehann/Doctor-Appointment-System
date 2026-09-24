import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/styles/all.css"
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// font awosome
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Appointment",
description: "Book trusted doctors online in minutes. Easy appointment scheduling, verified specialists, real patient reviews, and secure consultations — all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
