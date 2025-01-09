import { useAuth } from '@/hooks/use-auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const initialize = async () => {
            if (isAuthenticated) {
                await navigate('/dashboard');
            }
        }

        initialize();
    }, [isAuthenticated, navigate]);

    if (isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

export default GuestGuard;
