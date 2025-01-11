import { useAxios } from '@/hooks/use-axios';
import useToast from '@/hooks/use-toast';
import { createContext, ReactNode, useCallback, useEffect, useMemo, useReducer } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { isValidJwtToken, getJwtSub, getJwtUser } from '@/lib/utils';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface AuthState {
    isInitialized: boolean;
    isAuthenticated: boolean;
    user: User | null;
}

type AuthAction =
    | { type: 'INITIALIZE'; payload: { isAuthenticated: boolean; user: User | null } }
    | { type: 'LOGIN'; payload: { user: User } }
    | { type: 'LOGOUT' };


interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'INITIALIZE': {
            const { isAuthenticated, user } = action.payload;
            return {
                ...state,
                isInitialized: true,
                isAuthenticated,
                user,
            };
        }
        case 'LOGIN': {
            const { user } = action.payload;
            return {
                ...state,
                isAuthenticated: true,
                user,
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        }
        default:
            return state;
    }
};

const initialState: AuthState = {
    isInitialized: false,
    isAuthenticated: false,
    user: null,
};

export const AuthContext = createContext<AuthContextType>({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [token, setToken] = useLocalStorage<string | undefined>("token")

    const axios = useAxios();
    const toast = useToast();

    useEffect(() => {
        const initialize = async () => {
            try {
                let isAuthenticated = false;
                let user: User | null = null;

                if (token && isValidJwtToken(token)) {
                    const response = await axios.get<User>(`/users/${getJwtSub(token)}`);

                    isAuthenticated = true;
                    user = response.data;
                }

                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: isAuthenticated,
                        user: user
                    }
                });

            } catch (err) {
                console.error(err);

                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null
                    },
                });
            }
        };

        initialize();
    }, [axios, token]);

    const login = useCallback(async (email: string, password: string) => {
        try {
            const response = await axios.post<string>("/users/login", { email, password });
            const jwtToken = response.data;

            const decodedToken = getJwtUser(jwtToken);
            if (!decodedToken) {
                toast.showToast('error', 'Invalid token.');

                return;
            }

            const user: User = {
                id: decodedToken.sub,
                email: decodedToken.email,
                firstName: decodedToken.name,
                lastName: decodedToken.family_name,
            };

            setToken(jwtToken);

            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                },
            });

            toast.showToast("¡Inicio de sesión exitoso!", `¡Bienvenido, ${email}! Estás listo para empezar a explorar.`);
        } catch (error: unknown) {
            toast.showErrorToast(error);
        }
    }, [axios, toast, setToken]);

    const logout = useCallback(async () => {
        window.localStorage.removeItem('token');

        dispatch({
            type: "LOGOUT"
        })
    }, []);

    const values = useMemo(() => ({ ...state, login, logout }), [state, login, logout]);

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};