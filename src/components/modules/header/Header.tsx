/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import NavBarDrawer from "./NavBarDrawer";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isLaptop = useMediaQuery("(min-width: 1200px)");

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

  useEffect(() => {
    if (!isLaptop) {
      setIsVisible(true);
      return;
    }

    setLastScrollY(window.scrollY);
    setIsScrolled(window.scrollY > 80);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLaptop]);

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.header
          initial="hidden"
          animate={isVisible ? "visible" : "exit"}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              },
            },
            exit: {
              y: -100,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          className={`xl:max-w-screen-2xl mx-auto xl:px-25 md:px-13 px-6 xl:py-6 py-3.5 flex flex-row items-center-safe justify-between fixed top-0 left-0 right-0 z-999 ${
            isLaptop
              ? isScrolled
                ? "bg-background shadow"
                : "bg-transparent"
              : "bg-background"
          }`}
        >
          <Link href={"/"}>
            <Image src={Images.Logo} alt="Mozart" className="w-auto h-6" />
          </Link>
          <nav className="xl:flex flex-row items-center hidden">
            {routes.map((route, idx) => (
              <Link
                key={idx + 1}
                href={route.href}
                className={`text-base py-3.5 px-9 rounded-full cursor-pointer hover:text-primary transition ease-in-out duration-500 ${pathName === route.href ? "bg-primary20 text-primary uppercase" : ""}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-row items-center-safe gap-x-1.5">
            <button
              onClick={onPressMenuButton}
              className="xl:hidden flex items-center md:p-3.5 p-1.5 rounded-full bg-secondary"
              aria-pressed={showMenu}
            >
              <Image
                className="w-6 h-6"
                src={Icons.Humbugger}
                alt="humbugger"
              />
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
        </motion.header>
      </AnimatePresence>
      <NavBarDrawer
        open={showMenu}
        onClose={onPressMenuButton}
        routes={routes}
      />
    </React.Fragment>
  );
};

export default Header;
