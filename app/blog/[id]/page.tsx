import { getDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";

// 動的なメタデータを生成
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getDetail(id).catch(() => null);

  if (!post) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: "ブログ記事「" + post.title + "」の詳細ページです。",
  };
}

// 記事詳細ページ
export default async function StaticDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getDetail(id).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.content}`,
        }}
      />
    </div>
  );
}
