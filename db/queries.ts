import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
import { institutes, majors, posts } from "./schema";

export const getInstitutes = cache(async () => {
  const data = await db.query.institutes.findMany();
  return data;
});

export const getPosts = cache(async () => {
  const data = await db.query.posts.findMany();
  return data;
});

export const getPostsByMajor = cache(async (major_name: string) => {
  const major = await db.query.majors.findFirst({
    where: eq(majors.name, major_name),
  });

  if (!major) {
    // 处理找不到专业的情况，例如返回空数组或者抛出错误
    return [];
  }

  const data = await db.query.posts.findMany({
    where: eq(posts.major, major_name),
  });
  return data;
});

export const getMajorByInstitute = cache(async (institute_name: string) => {
  const institute = await db.query.institutes.findFirst({
    where: eq(institutes.name, institute_name),
  });

  if (!institute) {
    // 处理找不到学院的情况，例如返回空数组或者抛出错误
    return [];
  }

  const data = await db.query.majors.findMany({
    where: eq(majors.institute_id, institute.id),
  });
  return data;
});
