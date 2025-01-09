import {
    ChartPie,
    Contact,
    Newspaper,
    PackageOpen,
    Scroll,
    Snowflake,
    User,
} from "lucide-react"
import { NavMain } from "@/layouts/sidebar/nav/nav-main"
import { NavUser } from "@/layouts/sidebar/nav/nav-user"
import { NavHeader } from "@/layouts/sidebar/nav/nav-header"
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

interface NavItem {
    title: string;
    url: string;
    icon: React.ExoticComponent,
    items: Omit<NavItem, 'icon' | 'items'>[];
}

interface NavData {
    navMain: NavItem[];
}

const data: NavData = {
    navMain: [
        {
            title: "Panel",
            url: "/dashboard",
            icon: ChartPie,
            items: [
                {
                    title: "Analiticas",
                    url: "/dashboard",
                },
            ],
        },
        {
            title: "Gestión de inventarios",
            url: "/inventory-management",
            icon: PackageOpen,
            items: [
                {
                    title: "Unidades de medida",
                    url: "/inventory-management/measurement-units",
                },
                {
                    title: "Productos",
                    url: "/inventory-management/products",
                },
                {
                    title: "Movimientos",
                    url: "/inventory-management/movements",
                },
            ],
        },
        {
            title: "Gestión de relaciones",
            url: "/relationship-management",
            icon: Contact,
            items: [
                {
                    title: "Clientes",
                    url: "/relationship-management/customers",
                },
                {
                    title: "Proveedores",
                    url: "/relationship-management/suppliers",
                },
            ],
        },
        {
            title: "Gestión de ventas",
            url: "/sales-management",
            icon: Newspaper,
            items: [
                {
                    title: "Cotizaciones",
                    url: "/sales-management/quotations",
                },
                {
                    title: "Facturas",
                    url: "/sales-management/invoices",
                },
            ],
        },
        {
            title: "Gestión de compras",
            url: "/purchasing-management",
            icon: Scroll,
            items: [
                {
                    title: "Ordenes de compras",
                    url: "/purchasing-management/orders",
                },
                {
                    title: "Compras",
                    url: "/purchasing-management/purchases",
                },
            ],
        },
        {
            title: "Gestion de usuarios",
            url: "/user-management",
            icon: User,
            items: [
                {
                    title: "Usuarios",
                    url: "/user-management/users",
                },
                {
                    title: "Roles",
                    url: "/user-management/roles",
                },
            ]
        }
    ],
}

export function AppSidebar() {

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon" >
                <SidebarHeader>
                    <NavHeader name="Pavas Garzón" logo={Snowflake} description="Empresa familiar" />
                </SidebarHeader>
                <SidebarContent>
                    <NavMain items={data.navMain} />
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
