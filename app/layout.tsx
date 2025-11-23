import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "my portfolio",
  description: "転職と個人開発の第一歩として作成したポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex h-screen overflow-hidden">
            <nav className="w-64 bg-gray-800 text-white flex flex-col p-4">
              <h1 className="text-xl font-bold mb-6">ポートフォリオ</h1>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-gray-300">ホーム</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-300">ブログ</Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-gray-300">プロフィール</Link>
                </li>
              </ul>
            </nav>
          
          <div className="flex flex-col flex-1">
            <main className="flex-1 overflow-auto bg-transparent">
            {children}
            </main>

         
            <footer className="flex-col items-center justify-center p-4 bg-gray-500 text-white">
              <small>&copy; 2025 portfolio</small>
            </footer>
          </div>
        </div>


      </body>
    </html>
  );
}
