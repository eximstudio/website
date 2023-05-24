"use client";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { Nav } from "./nav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Exim Studio</title>
      </Head>
      <body className={roboto_mono.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
