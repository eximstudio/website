import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConfigStore {
    theme: 'dark' | 'light';
    setTheme: (theme: 'dark' | 'light') => void;

    _isErrorVibrationEnabled: boolean;
    triggerErrorVibration: () => void;
}

export const getTheme = (): 'dark' | 'light' =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const useStore = create<ConfigStore>()(
    persist(
        (set) =>
            ({
                // Theme
                theme: getTheme(),
                setTheme: (theme) => {
                    document.documentElement.classList.remove('dark', 'light');
                    document.documentElement.classList.add(theme);
                    set({ theme });
                },

                // Error vibration
                _isErrorVibrationEnabled: false,
                triggerErrorVibration: () => (
                    set({ _isErrorVibrationEnabled: true }),
                    setTimeout(() => set({ _isErrorVibrationEnabled: false }), 500)
                ),
            } satisfies ConfigStore as ConfigStore),
        {
            name: 'config-store',
            partialize: (store) => ({ theme: store.theme }),
        }
    )
);

export const useTheme = (): [ConfigStore['theme'], ConfigStore['setTheme']] => {
    const theme = useStore((state) => state.theme);
    const setTheme = useStore((state) => state.setTheme);
    return [theme, setTheme];
};

export const useTriggerErrorVibration = () => useStore((state) => state.triggerErrorVibration);
