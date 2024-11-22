import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <div>
          <main className="container mx-auto px-4 sm:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
