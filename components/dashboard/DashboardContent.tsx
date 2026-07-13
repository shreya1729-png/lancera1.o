import StatsCards from "./StatsCards";
import RecentInvoices from "./RecentInvoices";
import RecentClients from "./RecentClients";

export default function DashboardContent() {
  return (
    <main className="flex-1 bg-slate-50 p-8">

      <StatsCards />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <RecentInvoices />

        <RecentClients />

      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

        <p className="text-sm opacity-80">
          AI Assistant
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Ask Lancera AI Anything
        </h2>

        <p className="mt-4 max-w-2xl opacity-90">
          Generate invoices, write follow-up emails, summarize projects,
          estimate pricing and automate your freelance business.
        </p>

        <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700">
          Open AI Assistant
        </button>

      </div>

    </main>
  );
}