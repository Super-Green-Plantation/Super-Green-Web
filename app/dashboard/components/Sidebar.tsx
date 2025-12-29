"use client";

import { getUserdata } from "@/lib/userData";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface UserInterface {
  firstName: string;
}

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Users", href: "/dashboard/users", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const user: UserInterface | null = getUserdata(token);
    if (user) setFirstName(user.firstName);
  }, []);

  return (
    <aside
      className={`
        hidden md:flex flex-col justify-between
        h-screen bg-gray-900 text-white
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Top Section */}
      <div>
        {/* User Greeting */}
        <div
          className={`flex items-center gap-3 px-2 py-4 rounded-r-lg mt-3 transition-all duration-300
    ${collapsed ? "justify-center mx-0" : "justify-start mx-1 bg-gray-800/50"}`}
        >
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
            {firstName?.[0] || "U"}
          </div>
          {!collapsed && (
            <p className="text-sm font-medium">
              Welcome back, <span className="font-bold">{firstName}</span>!
            </p>
          )}
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
                    className={`
                      flex items-center gap-3
                      px-4 py-2 mx-2 rounded-md transition-all duration-200
                      ${collapsed ? "justify-center" : "justify-start"}
                      ${isActive ? "bg-green-700/80" : "hover:bg-green-700/50"}
                    `}
                    title={collapsed ? name : undefined} // tooltip when collapsed
                  >
                    <Icon className="w-5 h-5 text-white" />
                    {!collapsed && (
                      <span className="text-sm font-medium">{name}</span>
                    )}
                    {isActive && !collapsed && (
                      <span className="ml-auto w-1 h-6 bg-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Collapse Button */}
      <div className="">
        <div className="border-t border-gray-700 pt-4 flex items-center gap-3 px-4 py-2 cursor-pointer">
          {collapsed ? (
            <Link href="/auth/login" onClick={() => handleLogout()}>
              <LogOut className="w-5 h-5 text-red-300" />
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="flex px-4 py-2 text-sm font-medium text-white items-center bg-red-600/60 w-full rounded-md"
            >
              <LogOut className="w-5 h-5 text-red-300 mr-5" />
              Logout
            </Link>
          )}
          {/* <LogOut className="w-5 h-5 text-red-300" /> */}
        </div>
        <div className="flex justify-end px-2 py-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
            title={collapsed ? "Expand" : "Collapse"}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
      </div>
    </aside>
  );
}
