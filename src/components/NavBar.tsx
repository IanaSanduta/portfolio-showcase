// Importing necessary libraries and hooks from React and Next.js
import Link from "next/link";
import React from "react";
import { poppins } from "../../public/fonts/font";

// NavBarProps could be extended in the future to include more properties
interface NavBarProps {
  siteName: string;
}

const NavBar: React.FC<NavBarProps> = ({ siteName }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <div className="flex justify-between items-start p-2">
        <div
          className={`text-2xl font-bold text-slate-900 ${poppins.className} font-light italic hover:not-italic transition-all duration-200 ease-in-out`}
        >
          {siteName}
        </div>
        <div className="flex flex-col items-end">
          <Link
            className={`p-2 hover:text-lg ${poppins.className} font-thin transition-all duration-200 ease-in-out text-slate-50`}
            href="/"
          >
            Portfolio
          </Link>
          <Link
            className={`p-2 hover:text-lg ${poppins.className} font-thin transition-all duration-200 ease-in-out`}
            href="/"
          >
            Experince
          </Link>
          <Link
            className={`p-2 hover:text-lg ${poppins.className} font-thin transition-all duration-200 ease-in-out`}
            href="/"
          >
            Resume
          </Link>
          <Link
            className={`p-2 hover:text-lg ${poppins.className} font-thin transition-all duration-200 ease-in-out`}
            href="/"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
