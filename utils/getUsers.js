// import { cache } from "react";
// import connectMongoDb from "./connectMongoDb";
// import User from "@/models/User";

// export const getUsers = cache(async () => {
//   try {
//     await connectMongoDb();

//     const users = await User.find().exec();
//     if (!users) return null;
//     return users;
//   } catch (error) {
//     // return { error: error?.message };
//   }
// });

export async function getUsers() {
  const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return res.json();
}
