/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Icons, Images } from "@/public/exports";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState, useRef } from "react";
import NavBarDrawer from "./NavBarDrawer";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import ServicesMegaMenu from "./ServicesMegaMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isLaptop = useMediaQuery("(min-width: 1200px)");

  const [showMenu, setShowMenu] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  // Close Services dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathName]);

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
      {/* FULL PAGE OVERLAY BACKDROP */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsServicesOpen(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[990] cursor-pointer"
          />
        )}
      </AnimatePresence>

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
          className={`xl:max-w-screen-2xl mx-auto xl:px-25 md:px-13 px-6 xl:py-4 py-3.5 flex flex-row items-center-safe justify-between fixed top-0 left-0 right-0 z-999 transition-all duration-300 ${
            isServicesOpen
              ? "bg-white"
              : isLaptop
                ? isScrolled
                  ? "bg-background shadow"
                  : "bg-white"
                : "bg-background"
          }`}
        >
          <Link href={"/"}>
            <Image src={Images.Logo} alt="AMozart" className="w-auto h-6" />
          </Link>
          <nav className="xl:flex flex-row items-center hidden">
            {routes.map((route, idx) => {
              const isServices = route.label === "Services";
              return (
                <div
                  key={idx + 1}
                  className="relative py-2"
                  onMouseEnter={isServices ? handleMouseEnter : undefined}
                  onMouseLeave={isServices ? handleMouseLeave : undefined}
                >
                  <Link
                    href={route.href}
                    className={`text-base py-3.5 px-9 rounded-full cursor-pointer hover:text-primary transition ease-in-out duration-500 flex items-center gap-1.5 ${
                      pathName === route.href || (isServices && isServicesOpen)
                        ? "bg-primary20 text-primary uppercase"
                        : ""
                    }`}
                  >
                    {route.label}
                    {isServices && (
                      <motion.svg
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-4 h-4 text-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                    )}
                  </Link>
                </div>
              );
            })}
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
                href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
                className="text-base font-bold text-primary py-3.5 px-8.5"
              >
                Sign Up
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/login`}
                className="bg-primary py-3.5 px-10.5 rounded-full text-background text-base font-bold"
              >
                Login
              </Link>
            </div>
          </div>

          {/* MEGA MENU CONTAINER */}
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-6 right-6 xl:left-25 xl:right-25 mt-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(103,57,183,0.15)] border border-[#e1d7f1]/30 overflow-hidden z-[1000]"
              >
                <ServicesMegaMenu onClose={() => setIsServicesOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
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
