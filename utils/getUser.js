// import { cache } from "react";
// import User from "@/models/User";
// import connectMongoDb from "./connectMongoDb";

// export const getUser = cache(async (id) => {
//   try {
//     await connectMongoDb();
//     const user = await User?.findById(id)?.exec();
//     if (!user) return null;
//     return user;
//   } catch (error) {
//     // return { error: error?.message };
//   }
// });

export async function getUser(id) {
  const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return res.json();
}
