'use client';

import { useGlobalState } from './providers/GlobalProvider';
import { useEffect, useState } from 'react';

const GlobalLoading = () => {
  const { isLoading } = useGlobalState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + (100 - prev) * 0.1;
        });
      }, 200);
    } else {
      setProgress(100);
      const timer = setTimeout(() => {
        setProgress(0);
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent pointer-events-none"
    >
      <div 
        className="h-full bg-green-500 transition-all duration-300 ease-out shadow-[0_0_10px_#22c55e]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default GlobalLoading;
