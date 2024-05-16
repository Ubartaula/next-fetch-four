import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 flex flex-col">
      <Link className="p-4" href={"/posts"}>
        Posts
      </Link>
      <Link className="p-4" href={"/users"}>
        Users
      </Link>
      <Link className="p-4" href={"/create_user"}>
        Create User
      </Link>
      <Link className="p-4" href={"/create_post"}>
        Create Post
      </Link>
    </main>
  );
}
