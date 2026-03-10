import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">The page you are looking for does not exist.</p>

      <Link href="/" className="mt-6 px-6 py-3 bg-black text-white rounded-md">
        Go to Homepage
      </Link>
    </div>
  );
}
