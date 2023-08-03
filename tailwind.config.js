/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                fira: ['Fira Sans', 'sans-serif'],
                shadowHand: ['Shadow Hand', ""],
            },

            animation: {
                'spin-slow': 'spin 4s linear infinite',
                vibrate: 'vibrate .25s infinite',
            },
        },
    },
    plugins: [],
};
