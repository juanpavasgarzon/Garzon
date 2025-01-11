import { Snowflake } from "lucide-react"
import { NavMain } from "@/layouts/dashboard/navbar/navbar"
import { NavUser } from "@/layouts/dashboard/navbar/nav-user"
import { NavHeader } from "@/layouts/dashboard/navbar/nav-header"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarInset,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Outlet } from "react-router-dom"
import { Input } from "@/components/ui/input"


export function AppSidebar() {

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon" >
                <SidebarHeader>
                    <NavHeader name="Pavas Garzón" logo={Snowflake} description="Empresa familiar" />
                </SidebarHeader>
                <SidebarContent>
                    <NavMain />
                </SidebarContent>
                <SidebarFooter>
                    <NavUser />
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-white shadow-sm">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full"
                        />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-gray-100">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
