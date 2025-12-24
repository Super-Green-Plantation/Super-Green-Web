"use client";

import { ChevronLeft, ChevronRight, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Users", href: "/dashboard/users", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-gray-900 text-white transition-all duration-300
        ${collapsed ? "w-18" : "w-68"}
      `}
    >
      <div className="flex justify-between items-center">
        {!collapsed && <h2 className="mx-2">SGP Customer Dashboard</h2>}
        
        {/* Toggle */}
        <div className="flex justify-end p-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="bg-gray-700 p-1 rounded"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
      </div>

      {/* Menu */}
      <nav className="mt-6">
        <ul className="space-y-2">
          {menuItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    flex items-center gap-3
                    px-4 py-2 mx-2 rounded-md transition
                    ${collapsed ? "justify-center" : "justify-start"}
                    ${isActive ? "bg-green-700" : "hover:bg-green-800"}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {!collapsed && <span>{name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
