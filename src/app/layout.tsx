import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GangLion.OS",
  description: "Multi-organization CRM operating system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
