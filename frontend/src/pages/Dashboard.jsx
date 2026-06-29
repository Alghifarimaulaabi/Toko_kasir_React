import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Card from "@/components/dashboard/card"

const Dashboard = () => {
    return (
        <div className="bg-zinc-950">
    <SidebarProvider>

      <AppSidebar />

      <main className="flex-1 p-6">
        <SidebarTrigger />

      
      <div className="flex justify-center gap-5 row">
        <Card text="Total Barang" />
        <Card text="Total Pemasukan" />
        <Card text="Stock Habis" />
        </div>

      </main>
    </SidebarProvider>    
        </div>
    )
}

export default Dashboard;