'use client';
import { usePathname } from 'next/navigation';

export const CanonicalURL = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_MAIN_URL;
  const pathName = usePathname();
  if (!baseURL || !pathName) return null;
  return <link rel="canonical" href={baseURL + pathName} />;
};
