import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
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
        <main className="w-full h-full">
          <div className="flex h-full w-full justify-center items-center">
            <div className="bg-card-background p-10 border border-border rounded-lg">
              {children}
            </div>
          </div>
        </main>

        <ToastContainer theme="dark" />
      </body>
    </html>
  );
}
