import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue?: T) {
    const [value, setValue] = useState<T | undefined>(() => {
        try {
            const storedValue = localStorage.getItem(key);

            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage for key "${key}":`, error);
            return initialValue;
        }
    });

    const setStoredValue = useCallback((newValue?: T) => {
        if (newValue === undefined) {
            localStorage.removeItem(key);
            setValue(initialValue);
            return;
        }

        try {
            const serializedValue = JSON.stringify(newValue);
            localStorage.setItem(key, serializedValue);
            setValue(newValue);
        } catch (error) {
            console.error(`Error setting localStorage for key "${key}":`, error);
        }
    }, [key, initialValue]);

    return [value, setStoredValue] as const;
}