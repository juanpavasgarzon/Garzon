import { AxiosError } from 'axios';
import { useCallback, useMemo } from 'react';
import { toast } from 'sonner';

const useToast = () => {
    const showToast = useCallback((title: string, description: string) => {
        toast.info(title, {
            description, action: {
                label: "Cerrar",
                onClick: () => toast.dismiss(),
            },
            position: "top-right"
        });
    }, []);

    const showErrorToast = useCallback((error: unknown) => {
        const message = error instanceof AxiosError
            ? error.response?.data?.title || error.message
            : "General.Error";

        const description = error instanceof AxiosError
            ? error.response?.data?.detail || error.message
            : "Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.";

        toast.error(message, {
            description,
            action: {
                label: "Cerrar",
                onClick: () => toast.dismiss(),
            },
            position: "top-right"
        })
    }, []);

    return useMemo(() => ({
        showToast,
        showErrorToast
    }), [showErrorToast, showToast]);
};

export default useToast;