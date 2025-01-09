import AuthGuard from "@/guards/auth-guard";

export function AuthWrap<P>({ Component, ...props }: { Component: React.ComponentType } & P) {
    return (
        <AuthGuard>
            <Component {...props} />
        </AuthGuard>
    );
}