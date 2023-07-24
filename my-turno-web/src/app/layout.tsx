"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <title>My Turno</title>
        <body className={inter.className}>{children}</body>
      </html>
    </RecoilRoot>
  );
}
