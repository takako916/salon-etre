'use client';

import { usePathname } from "next/navigation";
import SalonBannerPlaceholder from "./SalonBannerPlaceholder";

export default function SalonConditionalBanner() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (!isHomePage) {
    return null;
  }

  return <SalonBannerPlaceholder />;
}
