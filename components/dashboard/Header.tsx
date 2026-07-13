"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {greeting}, Shreya 👋
        </h1>

        <p className="mt-1 text-slate-500">
          Here's an overview of your freelance business.
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            placeholder="Search..."
            className="h-11 w-72 rounded-xl border border-slate-200 pl-10 outline-none transition focus:border-blue-500"
          />

        </div>

        <button className="relative rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">

          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <img
          src="https://i.pravatar.cc/100?img=32"
          alt=""
          className="h-11 w-11 rounded-full"
        />

      </div>

    </header>
  );
}