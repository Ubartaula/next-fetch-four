
import { getUsers } from "@/utils/getUsers";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function Layout({ children }) {
  const usersData = await getUsers();
  const users = JSON.parse(JSON.stringify(usersData));

  return <div>{children}</div>;
}
