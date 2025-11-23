import Link from "next/link";
import { client } from "../../libs/client"; // clientを読み込む

// データの型定義（一覧の時と同じです）
type BlogPost = {
  id: string;
  title: string;
  text: string;
  publishedAt: string;
  category?: string; // カテゴリは無いかもしれないので ? をつける
};

// 1. 特定の記事を1つだけ取ってくる関数
async function getBlogPost(id: string) {
  const data = await client.get({
    endpoint: "blogs",
    contentId: id, // 「このIDの記事をください」と指定する
  });
  return data as BlogPost;
}

// paramsの型定義
type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  // URLからIDを取り出す
  const { id } = await params;
  
  // 2. MicroCMSから記事データを取ってくる（待機！）
  const post = await getBlogPost(id);

  return (
    <div className="p-8 max-w-3xl mx-auto h-full overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* ヘッダー部分 */}
        <div className="mb-6 border-b pb-4">
          <div className="text-sm text-gray-500 mb-2 flex justify-between">
             <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
             <span className="text-green-600 font-bold">{post.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        </div>
        
        {/* 3. 本文の表示（ここが重要！） 
          MicroCMSのリッチエディタは「HTML」として返ってきます。
          ReactでHTMLをそのまま表示するには、この「危険そうな名前」の属性を使います。
        */}
        <div 
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/blog" 
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-transform hover:scale-105"
        >
          ← ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
}
