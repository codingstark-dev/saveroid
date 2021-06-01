import React from 'react';
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="flex fixed w-full items-center  shadow-inner justify-center px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10 ">
      <Link href="/">
        <h4 className="text-center text-2xl font-bold font-mono">
          <span className="text-red-500">▶</span>Save<span className="text-red-500">⇣Roid</span>
          <span className="">.com</span>
          <span className="text-red-500">◀</span>
        </h4>
      </Link>
    </nav>
  );
};
export default NavBar;
