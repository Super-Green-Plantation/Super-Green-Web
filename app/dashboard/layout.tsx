'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Main */}
      <div className="flex-1">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center gap-3 p-4 bg-white shadow">
          <button onClick={() => setMobileOpen(true)}>
            <Menu />
          </button>
          <span className="font-semibold">Dashboard</span>
        </header>

        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
