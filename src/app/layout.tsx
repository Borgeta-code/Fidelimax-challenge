import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { AnswerProvider } from "@/context/Answers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fidelimax",
  description: "Pesquisa de satisfação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnswerProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </AnswerProvider>
  );
}
