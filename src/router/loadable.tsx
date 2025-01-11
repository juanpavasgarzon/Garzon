import { Loader } from "@/components/ui/loader";
import { Suspense } from "react";

export function loadable<P>(Component: React.ComponentType<P>): React.FC<P & { key?: React.Key }> {
    return (props) => (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
}
