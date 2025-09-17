import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BugZero - Software Testing Company",
  description: "Professional software testing services including functional testing, automation testing, performance testing, and security testing.",
  keywords: "software testing, QA, quality assurance, test automation, performance testing, security testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-dark-100 text-white`}>
        {children}
      </body>
    </html>
  );
}
