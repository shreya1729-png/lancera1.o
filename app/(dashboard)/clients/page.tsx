import AddClientDialog from "@/components/clients/AddClientDialog";
import ClientTable from "@/components/clients/ClientTable";

export default function ClientsPage() {
  return (
    <main className="flex-1 bg-slate-50 p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Clients
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your freelance clients.
          </p>

        </div>

        <AddClientDialog />

      </div>

      <ClientTable />

    </main>
  );
}