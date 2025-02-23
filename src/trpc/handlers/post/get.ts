import { Post } from "@/src/models";

export async function handlerGetPost({ input }: { input: string }) {
  const post = await Post.findBySlug(input);

  return post;
}
