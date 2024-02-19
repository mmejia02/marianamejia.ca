"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";

import mmLogo from "../../public/mm-logo.svg";
import { usePathname } from "next/navigation";

export function Navbar(): ReactElement {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="font-bold p-6 flex flex-row justify-between text-lg">
      <Link className="flex flex-col justify-center" href="/">
        <Image className="h-12 w-fit p-0" priority src={mmLogo} alt="MM Logo" />
      </Link>
      <div className="flex gap-12">
        <Link href="/" className={pathname == "/" ? "text-[#ad4043]" : ""}>
          Home
        </Link>
        <Link
          href="/projects"
          className={pathname == "/projects" ? "text-[#ad4043]" : ""}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={pathname == "/about" ? "text-[#ad4043]" : ""}
        >
          About
        </Link>
      </div>
    </div>
  );
}
