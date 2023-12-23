import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  themeColor: "#00000",
  openGraph: {
    images: ["/og"],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("max-w-2xl mx-auto bg-neutral-900" ,inter.className)}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
