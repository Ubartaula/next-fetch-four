import ListUserPosts from "@/components/ListUserPosts";
import { getUser } from "@/utils/getUser";
import { getUserPosts } from "@/utils/getUserPosts";
import { Suspense } from "react";

export const revalidate = 3600; //

const SingleUserPage = async ({ params: { id } }) => {
  // const { id } = params;

  // const [userData, userPostData] = await Promise.all([
  //   getUser(id),
  //   getUserPosts(id),
  // ]);
  // const user = JSON.parse(JSON.stringify(userData));

  const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const user = await res.json();

  return (
    <div className="">
      <p className="text-center text-xl font-bold p-4 capitalize">
        Posts by {user?.username} !
      </p>

      {/* <Suspense fallback={null}>
        <ListUserPosts userPosts={JSON.parse(JSON.stringify(userPostData))} />
      </Suspense> */}
    </div>
  );
};

export default SingleUserPage;
