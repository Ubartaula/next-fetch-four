import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-[2.5rem] bg-blue-600 text-white flex items-center justify-end">
      <Link className="px-10" href={"/"}>
        Home
      </Link>
    </div>
  );
};

export default NavBar;
