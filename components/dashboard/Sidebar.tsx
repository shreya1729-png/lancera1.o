"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Clients",
    href: "#",
    icon: Users,
  },
  {
    name: "Invoices",
    href: "#",
    icon: FileText,
  },
  {
    name: "Payments",
    href: "#",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "#",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col">

      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          Lancera
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Freelance OS
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">

        <div className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-black"
              >
                <Icon className="h-5 w-5" />

                {item.name}
              </Link>
            );
          })}

        </div>

      </nav>

      <div className="border-t p-6">

        <div className="rounded-2xl bg-slate-900 p-5 text-white">

          <p className="text-sm opacity-70">
            Free Plan
          </p>

          <h3 className="mt-2 font-semibold">
            Upgrade to Pro
          </h3>

          <p className="mt-2 text-sm opacity-70">
            Unlimited AI invoices,
            reminders and analytics.
          </p>

        </div>

      </div>

    </aside>
  );
}