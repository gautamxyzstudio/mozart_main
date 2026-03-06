"use client";
import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import NavBarDrawer from "./NavBarDrawer";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const routes = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];
  const pathName = usePathname();

  const onPressMenuButton = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return (
    <React.Fragment>
      <header className="xl:px-25 md:px-13 px-6 xl:py-6 py-3.5 flex flex-row items-center-safe justify-between">
        <Link href={"/"}>
          <Image src={Images.Logo} alt="Mozart" className="w-auto h-6" />
        </Link>
        <div className="xl:flex flex-row items-center hidden">
          {routes.map((route, idx) => (
            <Link
              key={idx}
              href={route.href}
              className={`text-base py-3.5 px-9 rounded-full transition ease-in-out duration-500 ${pathName === route.href ? "bg-primary20 text-primary uppercase" : ""}`}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center-safe gap-x-1.5">
          <button
            onClick={onPressMenuButton}
            className="xl:hidden flex items-center md:p-3.5 p-1.5 rounded-full bg-secondary"
            aria-pressed={showMenu}
          >
            <Image className="w-6 h-6" src={Icons.Humbugger} alt="humbugger" />
          </button>
          <div className="md:flex flex-row bg-secondary p-0.5 rounded-4xl items-center hidden">
            <Link
              href={"/signup"}
              className="text-base font-bold text-primary py-3.5 px-8.5"
            >
              Sign Up
            </Link>
            <Link
              href={"/login"}
              className="bg-primary py-3.5 px-10.5 rounded-full text-background text-base font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <NavBarDrawer
        open={showMenu}
        onClose={onPressMenuButton}
        routes={routes}
      />
    </React.Fragment>
  );
};

export default Header;
