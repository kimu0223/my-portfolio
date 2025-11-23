import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <main>
      <h1>
        こんにちは、プロフィールへようこそ！
        <Link href="/blog">ブログもご覧ください</Link>
      </h1>
      <h2>私の自己紹介と経歴をご説明します。</h2>
    </main>
  );
}

export default Page;

