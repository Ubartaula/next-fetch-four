import { getPosts } from "@/utils/getPosts";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function Layout({ children }) {
  const postsData = await getPosts();
  // const posts = JSON.parse(JSON.stringify(postsData));

  return <div>{children}</div>;
}
