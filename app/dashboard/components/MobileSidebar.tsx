"use client";

import { supabase } from "@/lib/supabase/client";
import { Home, LogOut, Settings, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Users", href: "/dashboard/users", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const [firstName, setFirstName] = useState("");

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onClose();
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "User";
        setFirstName(fullName.split(" ")[0]);
      }
    };
    getUser();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="flex flex-col relative w-64 h-full bg-gray-900 text-white">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>

        {/* Top Section */}
        <div className="flex items-center gap-3 px-4 py-4 mt-3 bg-gray-800/50 rounded-r-lg">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
            {firstName?.[0] || "U"}
          </div>
          <p className="text-sm font-medium">Welcome back, <span className="font-bold">{firstName}</span>!</p>
        </div>

        {/* Menu */}
        <nav className="mt-6">
          <ul className="flex flex-col gap-2">
            {menuItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md transition-all duration-200 ${isActive ? "bg-green-700/80" : "hover:bg-green-700/50"}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="mt-auto border-t  border-gray-700 pt-4 px-4 py-2">
          <Link href="/auth/login" onClick={handleLogout} className="flex px-4 py-2 text-sm font-medium text-white items-center bg-red-600/60 w-full rounded-md">
            <LogOut className="w-5 h-5 text-red-300 mr-5" /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
