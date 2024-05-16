import Link from "next/link";
import React from "react";

const ListPosts = ({ posts }) => {
  return (
    <div className="bg-white text-black max-w-lg mx-auto  ">
      <p className="p-4">ListPosts</p>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post?._id} className="m-2 border border-gray-500">
              <Link
                className="p-4 hover:underline"
                href={`/posts/${post?._id}`}
              >
                {post?.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ListPosts;
