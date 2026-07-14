"use client";

import { clients } from "./clients";
import ClientRow from "./ClientRow";
import { Search } from "lucide-react";

export default function ClientTable() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">

      <div className="flex items-center justify-between border-b p-6">

        <div className="relative w-80">

          <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search clients..."
            className="w-full rounded-xl border pl-10 pr-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

      </div>

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr className="text-left text-sm text-slate-500">

            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Company</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Revenue</th>
            <th className="px-6 py-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {clients.map((client) => (
            <ClientRow
              key={client.id}
              client={client}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}