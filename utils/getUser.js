import { cache } from "react";
import User from "@/models/User";
import connectMongoDb from "./connectMongoDb";

export const getUser = cache(async (id) => {
  try {
    await connectMongoDb();
    const user = await User?.findById(id)?.exec();
    if (!user) return { error: "No user found" };
    return user;
  } catch (error) {
    return { error: error?.message };
  }
});
