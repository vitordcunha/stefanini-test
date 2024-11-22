import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/_components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefanini test",
  description: "Full-stack application to search movies by name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen flex flex-col`}>
        <Header />
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
