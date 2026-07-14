"use client";

import { useEffect, useState } from "react";
import { getInvoices } from "@/lib/getInvoices";
import InvoiceRow from "./InvoiceRow";

export default function InvoiceTable() {
  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getInvoices();
      setInvoices(data);
    }

    load();
  }, []);

  return (
    <div className="rounded-2xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr className="text-left text-sm text-slate-500">

            <th className="px-6 py-4">
              Invoice
            </th>

            <th className="px-6 py-4">
              Client
            </th>

            <th className="px-6 py-4">
              Amount
            </th>

            <th className="px-6 py-4">
              Status
            </th>

            <th className="px-6 py-4">
              Due Date
            </th>

          </tr>

        </thead>

        <tbody>

          {invoices.map((invoice) => (
            <InvoiceRow
              key={invoice.id}
              invoice={invoice}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}