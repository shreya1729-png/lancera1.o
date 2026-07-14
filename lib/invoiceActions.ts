import { supabase } from "./supabase";

export async function createInvoice(invoice: {
  client_id: string;
  invoice_number: string;
  amount: number;
  due_date: string;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  return await supabase.from("invoices").insert([
    {
      ...invoice,
      user_id: user.id,
      status: "Pending",
    },
  ]);
}