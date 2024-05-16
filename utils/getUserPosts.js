import { cache } from "react";
import connectMongoDb from "./connectMongoDb";
import Post from "@/models/Post";

export const getUserPosts = cache(async (id) => {
  try {
    await connectMongoDb();
    const posts = await Post.find({ userId: id }).exec();
    if (!posts) return null;
    return posts;
  } catch (error) {
    // return { error: error?.message };
  }
});
