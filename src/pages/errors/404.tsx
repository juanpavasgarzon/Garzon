import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl text-gray-600 mb-8">Pagina no encontrada</h2>
            <p className="text-lg text-gray-500 mb-8">Lo lamentamos, la pagina que estas buscando no existe.</p>
            <Link to="/">
                <Button className="w-full">Volver a la pagina principal</Button>
            </Link>
        </div>
    );
}