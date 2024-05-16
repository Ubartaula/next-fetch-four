import { cache } from "react";
import connectMongoDb from "./connectMongoDb";
import Post from "@/models/Post";

export const getPosts = cache(async () => {
  try {
    await connectMongoDb();

    const posts = await Post.find().exec();
    if (!posts) return null;
    return posts;
  } catch (error) {
    // return { error: error?.message };
  }
});
