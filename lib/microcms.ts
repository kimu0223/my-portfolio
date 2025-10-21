import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

// ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

if (!process.env.MICROCMS_API_ENDPOINT) {
    throw new Error("MICROCMS_API_ENDPOINT is required");
}

// APIキーとサービスドメイン/エンドポイントを設定
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

const endpoint = process.env.MICROCMS_API_ENDPOINT;

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: endpoint,
    queries,
  });
  return listData;
};

// 全てのブログIDを取得
export const getListIds = async () => {
  const idsData = await client.getList<Blog>({
    endpoint: endpoint,
    queries: { fields: 'id', limit: 100 }, // IDのみを100件まで取得
  });
  return idsData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Blog>({
    endpoint: endpoint,
    contentId,
    queries,
  });
  return detailData;
};