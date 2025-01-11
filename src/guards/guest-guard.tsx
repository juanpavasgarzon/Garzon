import { useAuth } from '@/hooks/use-auth';
import { Navigate } from 'react-router-dom';

export const GuestGuard = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return <>{children}</>;
};
