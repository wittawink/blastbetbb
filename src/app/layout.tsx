import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { geomGraphic } from "@/assets/fonts";
import "@/styles/globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLAST BET",
  description: "BLAST BET on Blast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full font-geomGraphic antialiased",
        geomGraphic.variable
      )}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
