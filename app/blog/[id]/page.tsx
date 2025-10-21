import { getDetail, getListIds } from "@/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

// SSG用のパスを生成
export async function generateStaticParams() {
  const { contents } = await getListIds();

  const paths = contents.map((post) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

// 動的なメタデータを生成
export async function generateMetadata({ params }: Props) {
  const post = await getDetail(params.id).catch(() => null);

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
export default async function StaticDetailPage({ params }: Props) {
  const post = await getDetail(params.id).catch(() => null);

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
