import AddInvoiceDialog from "@/components/invoices/AddInvoiceDialog";
import InvoiceTable from "@/components/invoices/InvoiceTable";

export default function InvoicesPage() {
  return (
    <main className="flex-1 bg-slate-50 p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Invoices
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your invoices.
          </p>
        </div>

        <AddInvoiceDialog />

      </div>

      <InvoiceTable />

    </main>
  );
}