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

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (!isLaptop) {
      setIsVisible(true);
      return;
    }

    lastScrollYRef.current = window.scrollY;
    setIsScrolled(window.scrollY > 80);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
      setIsScrolled(currentScrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLaptop]);

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
            className="fixed inset-0 bg-black/10 backdrop-blur-0.1 z-[990] cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* BACKGROUND AURA GLOW MATCHING THE MOCKUP */}
      <div className="fixed top-0 left-0 right-0 h-48 pointer-events-none z-[997] flex justify-center overflow-visible">
        <div className="w-full max-w-7xl h-full bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(225,205,255,0.55)_0%,_rgba(242,230,255,0.2)_50%,_transparent_100%)] filter blur-[20px]" />
      </div>

      <AnimatePresence>
        <motion.header
          initial={false}
          animate={isVisible ? "visible" : "exit"}
          variants={{
            hidden: { opacity: 0, y: -100, x: "-50%" },
            visible: {
              opacity: 1,
              y: 0,
              x: "-50%",
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
              x: "-50%",
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          className={`fixed top-5 left-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] xl:max-w-7xl z-999 transition-all duration-300 flex flex-row items-center justify-between rounded-full py-2.5 px-6 md:px-8 border ${
            isServicesOpen
              ? "bg-[#FCFAFF] border-[#EBE4F9] shadow-[10_15px_35px_rgba(103,57,183,0.18)]"
              : isLaptop
                ? isScrolled
                  ? "bg-[#FCFAFF]/95 backdrop-blur-md border-[#EBE4F9]/100 shadow-[0_15px_35px_-5px_rgba(103,57,183,0.15),_0_8px_20px_-6px_rgba(103,57,183,0.08)]"
                  : "bg-[#FCFAFF]/85 backdrop-blur-md border-[#EBE4F9]/100 shadow-[0_10px_30px_-8px_rgba(103,57,183,0.08)]"
                : "bg-[#FCFAFF]/95 backdrop-blur-md border-[#EBE4F9]/100 shadow-[0_15px_35px_-5px_rgba(103,57,183,0.15),_0_8px_20px_-6px_rgba(103,57,183,0.08)]"
          }`}
        >
          <Link href={"/"} className="flex items-center">
            <Image src={Images.Logo} alt="AMozart" className="lg:w-[250px] md:w-[200px] w-[180px] h-auto" />
          </Link>
          <nav className="xl:flex flex-row items-center gap-x-1 hidden">
            {routes.map((route, idx) => {
              const isServices = route.label === "Services";
              return (
                <div
                  key={idx + 1}
                  className="relative py-1"
                  onMouseEnter={isServices ? handleMouseEnter : undefined}
                  onMouseLeave={isServices ? handleMouseLeave : undefined}
                >
                  <Link
                    href={route.href}
                    className={`text-base py-2.5 px-6 rounded-full cursor-pointer hover:text-primary transition ease-in-out duration-500 flex items-center gap-1.5 relative group ${
                      pathName === route.href || (isServices && isServicesOpen)
                        ? "bg-white shadow-[0_4px_14px_rgba(103,57,183,0.1)] text-primary font-medium"
                        : "text-[#4B4B4F]"
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
                    {/* Equalizer Underline animation from Variation 2 */}
                    <span
                      className="eq-underline transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                    >
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
          <div className="flex flex-row items-center-safe  gap-x-4">
            <Link
              href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
              className="xl:block hidden text-base font-bold text-primary py-2 px-4 hover:opacity-85 transition-all duration-300"
            >
              Sign Up
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}`}
              className="md:block hidden bg-gradient-to-r from-[#9053F6] to-[#6739b7] text-white text-base font-bold py-2.5 px-6 rounded-full shadow-[0_8px_20px_rgba(103,57,183,0.35)] hover:shadow-[0_12px_28px_rgba(103,57,183,0.5)] hover:translate-y-[-1px] transition-all duration-300"
            >
              Release Now
            </Link>
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
                className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-[0_20px_50px_rgba(103,57,183,0.15)] border border-[#e1d7f1]/30 overflow-hidden z-[1000] w-full"
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
