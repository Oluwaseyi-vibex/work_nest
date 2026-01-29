import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_SOCKET_URL: z.string(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const _env = envSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
  NODE_ENV: process.env.NODE_ENV,
});

if (!_env.success) {
  console.log(
    `Invalid Environment Variables: ${JSON.stringify(
      z.treeifyError(_env.error),
      null,
      2,
    )}`,
  );
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
