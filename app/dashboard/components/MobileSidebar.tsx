'use client';

import { Home, Settings, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Users', href: '/dashboard/users', icon: User },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function MobileSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* Drawer */}
      <aside className="fixed z-50 left-0 top-0 h-full w-64 bg-gray-900 text-white">
        <div className="flex justify-between p-4">
          <span className="font-bold">Menu</span>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            {menuItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3
                      px-4 py-2 mx-2 rounded-md
                      ${isActive
                        ? 'bg-green-700'
                        : 'hover:bg-green-800'}
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
