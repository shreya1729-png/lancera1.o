import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";

const invoices = [
  { client: "Sarah Johnson", amount: "₹12,000", status: "Paid" },
  { client: "TechNova", amount: "₹8,500", status: "Pending" },
  { client: "Creative Labs", amount: "₹15,200", status: "Paid" },
  { client: "Pixel Agency", amount: "₹9,000", status: "Pending" },
];

export default function RecentInvoices() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Recent Invoices
        </h2>

        <button className="flex items-center gap-2 text-sm text-blue-600">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </button>

      </div>

      <div className="space-y-4">

        {invoices.map((invoice) => (

          <div
            key={invoice.client}
            className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50"
          >

            <div>

              <h3 className="font-semibold">
                {invoice.client}
              </h3>

              <p className="text-sm text-slate-500">
                Invoice Payment
              </p>

            </div>

            <div className="text-right">

              <p className="font-bold">
                {invoice.amount}
              </p>

              <div className="mt-2 flex items-center justify-end gap-2">

                {invoice.status === "Paid" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Paid</span>
                  </>
                ) : (
                  <>
                    <Clock3 className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-orange-500">Pending</span>
                  </>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}