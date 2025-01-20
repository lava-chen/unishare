import { cache } from "react";
import db from "./drizzle";

export const getInstitutes = cache(async () => {
  const data = await db.query.institutes.findMany();
  return data;
});

export const getPosts = cache(async () => {
  const data = await db.query.posts.findMany();
  return data;
});
