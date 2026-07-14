"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { createInvoice } from "@/lib/invoiceActions";
import { supabase } from "@/lib/supabase";

export default function AddInvoiceDialog() {
  const [open, setOpen] = useState(false);

  const [clients, setClients] = useState<any[]>([]);

  const [clientId, setClientId] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    async function loadClients() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("clients")
        .select("*")
        .eq("user_id", user.id);

      setClients(data || []);
    }

    loadClients();
  }, []);

  async function handleSave() {
    const { error } = await createInvoice({
      client_id: clientId,
      invoice_number: invoiceNumber,
      amount: Number(amount),
      due_date: dueDate,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Invoice created!");

    window.location.reload();
  }

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)}>
        New Invoice
      </Button>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-xl w-96 space-y-4">

      <select
        className="w-full rounded-xl border p-3"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
      >
        <option value="">Select Client</option>

        {clients.map((client) => (
          <option
            key={client.id}
            value={client.id}
          >
            {client.name}
          </option>
        ))}
      </select>

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Invoice Number"
        value={invoiceNumber}
        onChange={(e) => setInvoiceNumber(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        className="w-full rounded-xl border p-3"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <Button
        className="w-full"
        onClick={handleSave}
      >
        Save Invoice
      </Button>

    </div>
  );
}