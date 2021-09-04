import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/" || pathname === "/tutorials" || pathname === "/add") {
      const classActive = 'border-white border-b-2 '
      setActiveItem(classActive)
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <nav className="flex items-center w-full h-20 bg-black">
      <div className="flex flex-row w-10/12 mx-auto max-w-screen-2xl">
        <Link href="/">
          <div className="pr-5 text-lg text-white cursor-pointer md:text-3xl">
            <h1>Redux Dashboard</h1>
          </div>
        </Link>

        <div className="flex items-end space-x-5 text-white text-md md:text-xl">
          <Link href="/tutorials">
            <p className={`cursor-pointer ${pathname === '/tutorials' ? activeItem : null  }`}>Tutorials</p>
          </Link>
          <Link href="/add">
            <p className={`cursor-pointer ${pathname === '/add' ? activeItem : null  }`}>Add</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
