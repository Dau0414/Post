import { ABOUT, POSTS } from "@/path";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <div className="text-4xl font-bold">
          <Link href="/">DEV.IO</Link>
        </div>
        <div className="space-x-3 ">
          <Button variant={"link"}><Link href={ABOUT}  className="text-xl font-bold">About</Link></Button>
          <Button variant={"link"} ><Link href={POSTS}  className="text-xl font-bold">Posts</Link></Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
