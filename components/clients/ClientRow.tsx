"use client";

import { Client } from "./clients";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  client: Client;
}

export default function ClientRow({ client }: Props) {
  return (
    <tr className="border-b hover:bg-slate-50">

      <td className="px-6 py-5 font-semibold">
        {client.name}
      </td>

      <td className="px-6 py-5">
        {client.company}
      </td>

      <td className="px-6 py-5">
        {client.email}
      </td>

      <td className="px-6 py-5">
        {client.phone}
      </td>

      <td className="px-6 py-5 font-semibold text-green-600">
        {client.revenue}
      </td>

      <td className="px-6 py-5">

        <div className="flex gap-3">

          <button className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100">
            <Pencil className="h-4 w-4" />
          </button>

          <button className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100">
            <Trash2 className="h-4 w-4" />
          </button>

        </div>

      </td>

    </tr>
  );
}