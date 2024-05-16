import ListUsers from "@/components/ListUsers";
import { getUsers } from "@/utils/getUsers";
import React, { Suspense } from "react";

const UsersPage = async () => {
  const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const users = await res.json();

  return (
    <>
      <Suspense fallback={"users loading..."}>
        <ListUsers users={users ? JSON?.parse(JSON?.stringify(users)) : null} />
      </Suspense>
    </>
  );
};

export default UsersPage;
