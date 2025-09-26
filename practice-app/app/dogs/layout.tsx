import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "犬一覧",
  description: "犬一覧",
};

export default function DogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-25">
      <div className="max-w-3xl mx-auto px-4">
        <p>dogs layout</p>
      </div>
      {children}
      <div className="max-w-3xl mx-auto px-4">
        <div className="mt-10">
          <Link href="/" className="text-blue-500 underline">ホームへ</Link>
        </div>
      </div>
    </div>
  );
}
