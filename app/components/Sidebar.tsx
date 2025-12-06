"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // リンクを押したらメニューを閉じる関数
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="w-full md:w-64 bg-gray-800 text-white flex flex-col p-4">
      
      {/* 上の段：タイトルと、開閉ボタン */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">ポートフォリオ</h1>
        
        {/* ハンバーガーボタン */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 下の段：リンク集 */}
      <ul className={`space-y-4 ${isOpen ? "block" : "hidden"} md:block`}>
        <li>
          {/* onClick={handleClose} を追加：クリックしたらメニューを閉じる */}
          <Link href="/" className="hover:text-gray-300" onClick={handleClose}>
            ホーム
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-300" onClick={handleClose}>
            ブログ
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-gray-300" onClick={handleClose}>
            プロフィール
          </Link>
        </li>
      </ul>
    </nav>
  );
}