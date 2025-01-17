import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Lora, Montserrat } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Loreto Kato",
  description: "engineer, podcaster, painter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/flower_icon.png" sizes="any" />
      <body
        style={{
          background: "rgb(214 211 209 / var(--tw-bg-opacity, 1))",
          color: "rgb(0 0 0 / var(--tw-text-opacity, 1))",
        }}
        className={`${roboto.className} ${lora.className} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
