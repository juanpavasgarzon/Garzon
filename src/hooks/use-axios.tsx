import { useEffect, useMemo } from 'react';
import axios, { AxiosInstance } from 'axios';
import { useAuth } from '@/hooks/use-auth';
import { useLocalStorage } from '@uidotdev/usehooks';

export const useAxios = (): AxiosInstance => {
    const [token] = useLocalStorage<string | null>("token", null);
    const { logout, isInitialized } = useAuth();

    const instance = useMemo(() => axios.create({
        baseURL: import.meta.env.VITE_BASE_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
    }), []);

    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseInterceptor = instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response && error.response.status === 401) {
                    logout();
                }
                return Promise.reject(error);
            }
        );

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        };
    }, [instance, token, isInitialized, logout]);

    return instance;
};
