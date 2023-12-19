import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumu resin art epoxy resin art maker in Ethiopia",
  description:
    "Our Epoxy resin art products are meticulously crafted to bring out the uniqueness and quality that will captivate your senses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="psOOJwob0B6RFlsbb6136nGwTvc-ggbGzURsSt-uO00"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
