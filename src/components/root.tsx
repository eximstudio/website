import { Outlet } from 'react-router-dom';
import Nav from './nav';
import { useRef } from 'react';
import { useStore } from '../utils/store';

export default function Root() {
    const isVibrationsEnabled = useStore((state) => state._isErrorVibrationEnabled);

    return (
        <div style={{ background: '#000', overflow: 'hidden', height: '100vh' }}>
            <div
                className={`h-full transition-all duration-300 overflow-auto bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-300 ${
                    isVibrationsEnabled ? 'animate-vibrate' : ''
                }`}
            >
                <Nav />
                <Outlet />
            </div>
        </div>
    );
}
