import "./globals.css";
import { Inter } from "next/font/google";
import { Nav } from "./globals/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exim Studio",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
