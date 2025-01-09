import { useAxios } from '@/hooks/use-axios';
import { useLocalStorage } from '@/hooks/use-local-storage';
import useToast from '@/hooks/use-toast';
import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    sub: string;
    email: string,
    name: string,
    family_name: string
};

interface UserType {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
};

interface AuthContextType {
    isAuthenticated: boolean;
    user: UserType | undefined;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const initialAuthState = {
    isAuthenticated: false,
    user: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
    },
};

export const AuthContext = createContext<AuthContextType>({
    ...initialAuthState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState(initialAuthState);
    const [token, setToken] = useLocalStorage<string | null>("token", null)

    const axios = useAxios();
    const toast = useToast();

    useEffect(() => {
        const initialize = async () => {
            if (!token) {
                setState(initialAuthState);
                return;
            }

            const decodedToken = jwtDecode<JwtPayload>(token);
            try {
                const response = await axios.get<UserType>(`/users/${decodedToken.sub}`);

                setState({ isAuthenticated: true, user: response.data });
            } catch (error: unknown) {
                setState(initialAuthState);
                toast.showErrorToast(error);
            }
        }

        if (token) {
            initialize();
        } else {
            setState(initialAuthState);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        try {
            const response = await axios.post<string>("/users/login", { email, password });
            const jwtToken = response.data;

            const decodedToken = jwtDecode<JwtPayload>(jwtToken);

            const user = {
                id: decodedToken.sub,
                email: decodedToken.email,
                firstName: decodedToken.name,
                lastName: decodedToken.family_name
            };

            setToken(jwtToken);
            setState({ isAuthenticated: true, user: user });

            toast.showToast("¡Inicio de sesión exitoso!", `¡Bienvenido, ${email}! Estás listo para empezar a explorar.`);
        } catch (error: unknown) {
            toast.showErrorToast(error);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = useCallback(async () => {
        setToken(null);

        setState(initialAuthState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const values = useMemo(() => ({ ...state, login, logout }), [state, login, logout]);

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};