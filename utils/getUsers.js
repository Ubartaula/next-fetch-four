import { cache } from "react";
import connectMongoDb from "./connectMongoDb";
import User from "@/models/User";

export const getUsers = cache(async () => {
  try {
    await connectMongoDb();

    const users = await User.find().exec();
    if (!users) return { error: "no users found" };
    return users;
  } catch (error) {
    return { error: error?.message };
  }
});
