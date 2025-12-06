import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Link from "next/link"; ← Sidebarの中に移動したので、ここでは不要なら消してもOK
import Sidebar from "./components/Sidebar";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            
            {/* ★ここを Sidebar に置き換えるのがポイント！ */}
            <Sidebar />
          
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