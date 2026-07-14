import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        {children}

      </div>

    </div>
  );
}