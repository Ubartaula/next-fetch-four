import ListUsers from "@/components/ListUsers";
import { getUsers } from "@/utils/getUsers";
import React, { Suspense } from "react";

export const revalidate = 3600;

const UsersPage = async () => {
  const users = await getUsers();

  if (users === undefined || users?.length <= 0) {
    return <p>List of users are empty</p>;
  }

  return (
    <>
      <Suspense fallback={"users loading..."}>
        <ListUsers users={JSON?.parse(JSON?.stringify(users))} />
      </Suspense>
    </>
  );
};

export default UsersPage;
