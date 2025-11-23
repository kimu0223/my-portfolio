import Link from "next/link";
import { client } from "../libs/client"; // さっき作ったclientを読み込む

// MicroCMSから返ってくるデータの「型」を定義します
type BlogPost = {
  id: string;
  title: string;
  text: string;      // あなたの設定に合わせて content → text に変更
  eventDate: string; // あなたの設定に合わせて追加
  publishedAt: string;
};

// データを取得する関数
async function getBlogPosts() {
  const data = await client.get({
    endpoint: "blogs",
  });
  return data.contents as BlogPost[];
}

export default async function BlogPage() {
  // ここで実際のデータを取ってくる！
  const blogPosts = await getBlogPosts();

  return (
    <div className="p-8 h-full overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b-4 border-green-600 inline-block">
        ブログ記事一覧
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link 
            href={`/blog/${post.id}`} 
            key={post.id}
            className="block p-6 bg-white border-l-4 border-gray-300 shadow-md hover:shadow-xl hover:border-green-500 transition-all duration-300 rounded-r-lg"
          >
            <div className="text-sm text-gray-500 mb-2">
              {/* 日付を綺麗に表示する */}
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
            {/* プレビュー用に本文の最初の方だけ表示 */}
            <p className="text-gray-600 text-sm line-clamp-3">
              {post.text}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
          ← スタジアム（TOP）に戻る
        </Link>
      </div>
    </div>
  );
}
