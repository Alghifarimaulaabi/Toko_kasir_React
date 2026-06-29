import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

const Dashboard = () => {
    return (
        <>
    <SidebarProvider>

      <AppSidebar />

      <main className="flex-1 p-6">
        <SidebarTrigger />

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

      </main>
    </SidebarProvider>    
        </>
    )
}

export default Dashboard;