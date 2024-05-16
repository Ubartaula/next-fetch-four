"use server";

import User from "@/models/User";
import connectMongoDb from "@/utils/connectMongoDb";
import { revalidatePath } from "next/cache";

export async function createUser(formData) {
  const { username, email } = Object.fromEntries(formData);
  if (!username || !email) return { error: "username and email required" };
  try {
    await connectMongoDb();
    const newUserObj = {
      username,
      email,
    };
    const res = await User.create(newUserObj);
    revalidatePath("/users", "page");
    return { success: `User created with username - ${res?.username}` };
  } catch (error) {
    return { error: error?.message };
  }
}
