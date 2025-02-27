"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const isActive = (pathname: string) => {
    return path === pathname;
  };

  const styles = {
    li: "transition delay-150 duration-200 ease-in-out",
    active: "bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ",
  };

  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center py-8 px-8">
      <div className="logo"></div>
      <nav className="flex text-align-center">
        <ul className="flex space-x-8 content-center font-semibold text-2xl" >
          <li
            className={
              (isActive("/") ? styles.active : "hover-underline ") + styles.li
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              (isActive("/about") ? styles.active : "hover-underline ") + styles.li
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              (isActive("/projects") ? styles.active : "hover-underline ") +
              styles.li
            }
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={
              (isActive("/contact") ? styles.active : "hover-underline ") +
              styles.li
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        {/* <ModeToggle /> */}
      </div>
      </div>
    </header>
  );
}
