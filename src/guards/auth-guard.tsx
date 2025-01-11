import { Loader } from '@/components/ui/loader';
import { useAuth } from '@/hooks/use-auth';
import Login from '@/pages/auth/login';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

    const { isAuthenticated, isInitialized } = useAuth();
    const { pathname } = useLocation();

    if (!isInitialized) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }

        return <Login />;
    }

    if (requestedLocation && pathname !== requestedLocation) {
        setRequestedLocation(null);
        return <Navigate to={requestedLocation} />;
    }

    return <>{children}</>;
};
