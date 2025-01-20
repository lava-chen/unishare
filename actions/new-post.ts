"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

import { posts } from "@/db/schema";
import db from "@/db/drizzle";

const createNewPost = async (
  content: string,
  course: string,
  major: string
) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user || !userId) {
    throw new Error("Unauthorized");
  }

  const date = new Date().toISOString();

  await db.insert(posts).values({
    date: date,
    content: content,
    course: course,
    major: major,
    userId: userId,
    userName: user.fullName || "User",
    userImageSrc: user.imageUrl || "logo.svg",
  });

  revalidatePath("/");
  redirect("/");
};

export default createNewPost;
