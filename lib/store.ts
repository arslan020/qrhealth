import { Redis } from "@upstash/redis";
import { DEFAULT_CONTENT, type SiteContent } from "@/lib/content";

const CONTENT_KEY = "qr-health:site-content";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export function isStorageConfigured(): boolean {
  return getRedis() !== null;
}

export async function getContent(): Promise<SiteContent> {
  const redis = getRedis();
  if (!redis) return DEFAULT_CONTENT;
  const stored = await redis.get<SiteContent>(CONTENT_KEY);
  if (!stored) return DEFAULT_CONTENT;
  // Merge so content saved before a new section existed still gets its defaults.
  return { ...DEFAULT_CONTENT, ...stored };
}

export async function saveContent(content: SiteContent): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    throw new Error(
      "Storage is not configured yet. Connect a KV/Redis database to this project in the Vercel dashboard (Storage tab), then redeploy."
    );
  }
  await redis.set(CONTENT_KEY, content);
}
