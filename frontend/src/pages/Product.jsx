import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Card from "@/components/dashboard/card"

const Product = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 font-sans">
            <SidebarProvider>
                <AppSidebar />
                <main className="flex-1 p-8">
                    <SidebarTrigger className="mb-6 text-slate-400 hover:text-slate-100 transition-colors" />
                    

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card text="Total Barang" />
                        <Card text="Total Pemasukan" />
                        <Card text="Stock Habis" />
                    </div>
                </main>
            </SidebarProvider>    
        </div>
    )
}

export default Product;