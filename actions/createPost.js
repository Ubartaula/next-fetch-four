"use server";

import Post from "@/models/Post";
import connectMongoDb from "@/utils/connectMongoDb";
import { revalidatePath } from "next/cache";

export async function createPost(formData) {
  const { userId, title } = Object.fromEntries(formData);
  if (!userId || !title) return { error: "userId and title required" };
  try {
    await connectMongoDb();
    const newPostObj = {
      userId,
      title,
    };
    const res = await Post.create(newPostObj);
    revalidatePath("/posts", "page");
    return { success: `Post created with userId - ${res?.userId}` };
  } catch (error) {
    return { error: error?.message };
  }
}
