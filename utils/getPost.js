import { cache } from "react";
import Post from "@/models/Post";
import connectMongoDb from "./connectMongoDb";

export const getPost = cache(async (id) => {
  try {
    await connectMongoDb();
    const post = await Post?.findById(id)?.exec();
    if (!post) return null
    return post;
  } catch (error) {
    // return { error: error?.message };
  }
});
