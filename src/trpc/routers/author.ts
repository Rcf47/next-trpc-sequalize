import { z } from "zod";
import getTrpc from "..";
import { handlerGetAuthor } from "@/src/trpc/handlers/author/get";

export const t = getTrpc();

export const authorRouter = t.router({
  get: t.procedure.input(z.string()).query(handlerGetAuthor),
});
