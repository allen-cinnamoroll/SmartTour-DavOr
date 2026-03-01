import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Tour DavOr",
  description: "Tourism recommendation system for Davao Oriental",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
