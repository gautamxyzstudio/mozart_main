/* eslint-disable @typescript-eslint/no-explicit-any */
import { Drawer } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons, Images } from "@/public/exports";
import { usePathname } from "next/navigation";

type INavBarDrawerProps = {
  open: boolean;
  onClose: () => void;
  routes: any[];
};

const NavBarDrawer: React.FC<INavBarDrawerProps> = ({
  open,
  onClose,
  routes,
}) => {
  const pathName = usePathname();
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      PaperProps={{
        width: "90%",
      }}
      sx={{
        zIndex: 9999,
        "@media(max-width: 1210px)": {
          display: "block",
        },
        "@media(max-width: 560px)": {
          "& .MuiDrawer-paper": {
            width: "100% !important",
          },
        },
        "& .MuiDrawer-paper": {
          width: 445,
        },
      }}
    >
      <nav className="w-full h-full flex flex-col justify-between px-8 pb-8 bg-background overflow-scroll backdrop-blur-lg">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row items-center-safe justify-between w-full py-3.5">
            <Link href={"/"} onClick={onClose}>
              <Image src={Images.Logo} alt="AMozart" className="w-auto h-6" />
            </Link>
            <button
              onClick={onClose}
              className="flex items-center md:p-3.5 p-1.5 rounded-full bg-secondary"
              aria-pressed={open}
            >
              <Image className="w-6 h-6" src={Icons.Close} alt="close" />
            </button>
          </div>
          <div className="w-full flex flex-col space-y-8.75 text-center">
            {routes.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className={` rounded-full uppercase text-base w-full py-3.5 ${pathName === item.href ? "bg-primary20 text-primary" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row bg-secondary p-0.5 rounded-4xl items-center w-fit">
          <Link
            href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/signup`}
            onClick={onClose}
            className="text-base font-bold text-primary py-3.5 px-8.5"
          >
            Sign Up
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_ADMIN_BASE_MAIN_URL}/login`}
            onClick={onClose}
            className="bg-primary py-3.5 px-10.5 rounded-full text-background text-base font-bold"
          >
            Login
          </Link>
        </div>
      </nav>
    </Drawer>
  );
};

export default NavBarDrawer;
