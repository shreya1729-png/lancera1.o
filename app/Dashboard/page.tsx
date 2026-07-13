import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import DashboardContent from "@/components/dashboard/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <DashboardContent />

      </div>

    </div>
  );
}