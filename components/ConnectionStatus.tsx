'use client';

import { useGlobalState } from './providers/GlobalProvider';

const ConnectionStatus = () => {
  const { isOnline } = useGlobalState();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999] px-4 py-2 bg-red-600 text-white rounded-full shadow-lg flex items-center gap-2 animate-bounce">
      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      <span className="text-sm font-medium">You are offline. Please check your connection.</span>
    </div>
  );
};

export default ConnectionStatus;
