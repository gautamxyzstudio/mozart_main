import type { Metadata } from "next";
import Link from "next/link";
import { Images } from "@/public/exports";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-15 h-auto md:px-13 px-6 text-center">
      <div>
        <Image
          src={Images.NotFound}
          alt="Not Found"
          className="w-full xl:h-150 md:h-100 h-full"
        />
      </div>

      <h1 className="xl:text-[80px] xl:leading-20 font-bold capitalize md:text-[50px] md:leading-13 text-[22px] ">
        ooops! Page not found
      </h1>
      <p className="mt-4 text-base text-black80">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-primary text-white rounded-[45px] xl:mb-22 md:mb-14 mb-10 "
      >
        Back to Home
      </Link>
    </div>
  );
}
