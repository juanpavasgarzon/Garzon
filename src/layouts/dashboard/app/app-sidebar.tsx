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
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { useLocalStorage } from "@uidotdev/usehooks"
import { SIDEBAR_STATUS_STORAGE_KEY } from "@/config"
import { AppHeader } from "@/layouts/dashboard/app/app-header"

export function AppSidebar() {
    const [value, setValue] = useLocalStorage(SIDEBAR_STATUS_STORAGE_KEY, true)

    const handleOpenChange = (open: boolean) => {
        setValue(open);
    }

    const applicationName = import.meta.env.VITE_APP_NAME

    return (
        <SidebarProvider open={value} onOpenChange={handleOpenChange}>
            <Sidebar collapsible="icon" >
                <SidebarHeader>
                    <NavHeader name={applicationName} logo={Snowflake} description="Tu mejor opción" />
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
                <AppHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-gray-100">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
