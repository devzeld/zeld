"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./mode-toggle";

export default function Header() {
  const path = usePathname();

  const isActive = (pathname: string) => {
    return path === pathname;
  };

  const styles = {
    li: "transition delay-150 duration-200 all",
  };

  return (
    /*header = bg-gradient-to-r from-blue-500 to-blue-700*/
    <header className="sticky top-0 ">
      <div className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="logo"></div>
      <nav className="flex text-align-center">
        <ul className="flex space-x-8 content-center font-semibold text-xl">
          <li
            className={
              (isActive("/") ? "active " : "hover-underline ") + styles.li
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              (isActive("/about") ? "active " : "hover-underline ") + styles.li
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              (isActive("/projects") ? "active " : "hover-underline ") +
              styles.li
            }
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={
              (isActive("/contact") ? "active " : "hover-underline ") +
              styles.li
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      </div>
    </header>
  );
}
