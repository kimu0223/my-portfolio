import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createHmac } from 'crypto';

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATION_TOKEN;
  if (!secret) {
    console.error('Secret token is not set.');
    return NextResponse.json({ message: 'Secret token is not set' }, { status: 500 });
  }

  // 署名の検証
  const signature = request.headers.get('x-microcms-signature');
  const body = await request.text(); // 生のボディを取得

  if (!signature) {
    console.error('Signature is missing.');
    return NextResponse.json({ message: 'Signature is missing' }, { status: 400 });
  }

  const expectedSignature = createHmac('sha256', secret).update(body).digest('hex');

  if (signature !== expectedSignature) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  try {
    const { id } = JSON.parse(body).content; // パースしてIDを取得

    // ページの再生成
    revalidatePath('/blog'); // ブログ一覧ページ
    if (id) {
      revalidatePath(`/blog/${id}`); // 記事詳細ページ
    }

    console.log(`Revalidated: /blog and /blog/${id}`);
    return NextResponse.json({ revalidated: true, now: Date.now() });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
