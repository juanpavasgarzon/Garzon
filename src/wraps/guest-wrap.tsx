import GuestGuard from "@/guards/guest-guard";

export function GuestWrap<P>({ Component, ...props }: { Component: React.ComponentType } & P) {
    return (
        <GuestGuard>
            <Component {...props} />
        </GuestGuard>
    )
}