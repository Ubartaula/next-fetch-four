import ListPosts from "@/components/ListPosts";
import { getPosts } from "@/utils/getPosts";
import React, { Suspense } from "react";

export const revalidate = 3600;

const PostsPage = async () => {
  const posts = await getPosts();

  if (posts === undefined || posts?.length <= 0) {
    return <p>List of posts are empty</p>;
  }

  return (
    <>
      <Suspense fallback={"posts loading..."}>
        <ListPosts posts={JSON?.parse(JSON?.stringify(posts))} />
      </Suspense>
    </>
  );
};

export default PostsPage;
