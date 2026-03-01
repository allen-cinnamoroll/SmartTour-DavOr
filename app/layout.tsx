import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart Tour DavOr | Davao Oriental Tourism",
  description:
    "Personalized tourism recommendations for Davao Oriental - spots, accommodations, and itineraries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-primary-600">
              Smart Tour DavOr
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-slate-600 hover:text-primary-600">
                Home
              </Link>
              <Link
                href="/explore"
                className="text-slate-600 hover:text-primary-600"
              >
                Explore
              </Link>
              <Link
                href="/recommend"
                className="text-slate-600 hover:text-primary-600"
              >
                Get Recommendations
              </Link>
              <Link
                href="/admin"
                className="text-slate-600 hover:text-primary-600"
              >
                Admin
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
