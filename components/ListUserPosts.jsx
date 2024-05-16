import React from "react";

const ListUserPosts = ({ userPosts }) => {
  return (
    <div className="max-w-lg mx-auto">
      {userPosts?.map((userPost) => {
        return (
          <div key={userPost?._id} className="p-4 border border-gray-400 m-4">
            <p>{userPost?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListUserPosts;
