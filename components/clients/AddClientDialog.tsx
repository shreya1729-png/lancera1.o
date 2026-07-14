"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { createClient } from "@/lib/clientActions";

export default function AddClientDialog() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSave() {
    const { error } = await createClient({
      name,
      company,
      email,
      phone,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Client added!");

    setOpen(false);

    window.location.reload();
  }

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)} className="gap-2">
        <Plus className="h-4 w-4" />
        Add Client
      </Button>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-xl w-96 space-y-4">
      <input
        className="w-full rounded-xl border p-3"
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Button onClick={handleSave} className="w-full">
        Save Client
      </Button>
    </div>
  );
}