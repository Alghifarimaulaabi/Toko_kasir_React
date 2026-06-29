import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"


import { Button } from "./ui/button"
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ShoppingCart />
                  <span>Kasir</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Package />
                  <span>Produk</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users />
                  <span>Pelanggan</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
        <Button variant="destructive" className="absolute bottom-2 w-full">
            Logout
        </Button>

      </SidebarContent>
    </Sidebar>
  )
}