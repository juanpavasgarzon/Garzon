import { cn } from '@/lib/utils';
import { Loader as LoaderIcon } from 'lucide-react';

const Loader = () => {
    return (
        <div className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm")} >
            <div className="flex flex-col items-center space-y-4">
                <LoaderIcon className="h-12 w-12 animate-spin text-blue-500" />
                <p className="text-base font-medium text-white">
                    Cargando, por favor espera...
                </p>
            </div>
        </div>
    );
}

Loader.displayName = "Loader"

export { Loader }