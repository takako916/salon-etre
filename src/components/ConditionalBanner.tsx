'use client';

import { usePathname } from 'next/navigation';
import Banner from './Banner';

export default function ConditionalBanner() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return <Banner />;
}
