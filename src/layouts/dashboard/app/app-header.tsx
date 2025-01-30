import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { navConfig } from "@/layouts/dashboard/navbar/nav.config";
import { useNavigate } from "react-router-dom";
import { Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppHeader() {
    const [openCommand, setOpenCommand] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const down = (event: KeyboardEvent) => {
            const { key, metaKey, ctrlKey } = event;

            if (key === "j" && (metaKey || ctrlKey)) {
                event.preventDefault();
                setOpenCommand((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const navigateToUrl = (url: string) => {
        navigate(url)
        setOpenCommand(false)
    }

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-white shadow-sm">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 h-4"
                />
                <div className="flex items-center w-full relative">
                    <Input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full flex-1 pr-10"
                        onClick={() => setOpenCommand(true)}
                    />
                    <kbd className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>J
                    </kbd>
                </div>
                <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
                    <CommandInput placeholder="Escribe tu busqueda..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {navConfig.map((item) => (
                            <CommandGroup heading={item.title} key={item.url}>
                                {item.items.map((subItem) => (
                                    <CommandItem key={subItem.url} asChild className="cursor-pointer">
                                        <Button variant="ghost" onClick={() => navigateToUrl(subItem.url)} className="w-full text-left m-0 p-0 h-auto">
                                            <Circle />
                                            <div className="sr-only">{item.title}</div>
                                            <span className="font-normal text-sm w-full">
                                                {subItem.title}
                                            </span>
                                        </Button>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </CommandDialog>
            </div>
        </header>
    )
}