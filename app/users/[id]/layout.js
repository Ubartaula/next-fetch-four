import { getUser } from "@/utils/getUser";
import { getUserPosts } from "@/utils/getUserPosts";
import React, { Suspense } from "react";

export const revalidate = 3600; //

export default async function Layout({ children, params: { id } }) {
  const [userData, userPostsData] = await Promise.all([
    getUser(id),
    getUserPosts(id),
  ]);

  const user = JSON.parse(JSON.stringify(userData));
  const userPosts = JSON.parse(JSON.stringify(userPostsData));

  return (
    <div>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
