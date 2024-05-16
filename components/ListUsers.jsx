import Link from "next/link";
import React from "react";

const ListUsers = ({ users }) => {
  return (
    <div className="bg-white text-black max-w-lg mx-auto  ">
      <p className="p-4">ListUsers</p>
      {users &&
        users.map((user) => {
          return (
            <div key={user?._id} className="m-2 border border-gray-500">
              <Link
                className="p-4 hover:underline"
                href={`/users/${user?._id}`}
              >
                {user?.email}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ListUsers;
