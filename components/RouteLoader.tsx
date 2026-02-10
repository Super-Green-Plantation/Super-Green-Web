'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGlobalState } from './providers/GlobalProvider';

const RouteLoader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsLoading } = useGlobalState();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate/Wait for initial render of the new route

    return () => {
      clearTimeout(timer);
      setIsLoading(false);
    };
  }, [pathname, searchParams, setIsLoading]);

  return null;
};

export default RouteLoader;
