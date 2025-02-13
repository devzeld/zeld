import React from "react";
import Link from "next/link";

import { PiInstagramLogoDuotone } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <p>Here: </p>
        <ul>
          <li>
            <Link href={""}>
              <PiInstagramLogoDuotone size={"30px"} />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <VscGithub size={"30px"} />
            </Link>
          </li>
          <li>
            <Link href={""}></Link>
          </li>
        </ul>
      </div>
      <p className="rights">&copy; {new Date().getFullYear()} Me. All rights reserved.</p>
    </footer>
  );
}
