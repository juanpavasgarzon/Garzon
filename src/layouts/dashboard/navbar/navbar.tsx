import { ChevronRight } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { navConfig } from "@/layouts/dashboard/navbar/nav.config"

export function NavMain() {
    const { isMobile, state } = useSidebar()
    const location = useLocation();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Menu de navegación</SidebarGroupLabel>
            <SidebarMenu>
                {navConfig.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={location.pathname.includes(item.url)}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            {state === "collapsed" ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuButton className="my-1 font-bold">
                                            {item.icon && <item.icon />}
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </SidebarMenuButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                        side={isMobile ? "bottom" : "right"}
                                        align="center"
                                        sideOffset={4}
                                    >
                                        <DropdownMenuLabel className="p-0 font-normal">
                                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                                {item.icon && <item.icon />}
                                                <div className="grid flex-1 text-left text-sm leading-tight">
                                                    <span className="truncate font-semibold">
                                                        {item.title}
                                                    </span>
                                                </div>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            {item.items?.map((subItem) => (
                                                <DropdownMenuItem asChild key={subItem.title}>
                                                    <Link to={subItem.url}>
                                                        <span>{subItem.title}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title} className="my-1 font-bold">
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        className={
                                                            subItem.url === location.pathname
                                                                ? "bg-sidebar-accent"
                                                                : ""
                                                        }
                                                    >
                                                        <Link to={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </>
                            )}
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
