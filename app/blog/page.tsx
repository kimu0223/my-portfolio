import Link from "next/link";
import { getList } from "@/lib/microcms";

export default async function StaticPage() {
  const { contents } = await getList();

  // データの取得ができない・記事が0件の場合はエラー表示
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}