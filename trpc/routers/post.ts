import { z } from "zod";
import getTrpc from "..";
import { handlerGetPost } from "@/trpc/handlers/post/get";

export const t = getTrpc();

export const postRouter = t.router({
  getBySlug: t.procedure.input(z.string()).query(handlerGetPost),
});
