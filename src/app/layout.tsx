import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Avukat Bahar Aydın",
  description: "Avukat Bahar Aydın'ın resmi web sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
