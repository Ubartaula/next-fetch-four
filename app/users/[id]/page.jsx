import ListUserPosts from "@/components/ListUserPosts";
import { getUser } from "@/utils/getUser";
import { getUserPosts } from "@/utils/getUserPosts";
import { Suspense } from "react";

export const revalidate = 3600; //

const SingleUserPage = async ({ params }) => {
  const { id } = params;

  const [userData, userPostData] = await Promise.all([
    getUser(id),
    getUserPosts(id),
  ]);
  const user = JSON.parse(JSON.stringify(userData));

  return (
    <div className="">
      <p className="text-center text-xl font-bold p-4 capitalize">
        Posts by {user?.username} !
      </p>

      <Suspense fallback={null}>
        <ListUserPosts userPosts={JSON.parse(JSON.stringify(userPostData))} />
      </Suspense>
    </div>
  );
};

export default SingleUserPage;
