import type { Config } from 'tailwindcss';
export default {
    content: ['./src/**/**.{html,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                'primary': '#3c1c12',
                'primary-light': '#8c5b4e',
                'secondary': '#d1bcb5',
                'secondary-light': '#f5e9e6',
                'orange': '#c18062',
                'brick': '#875242',
                'sage': '#214f4c',
            },
            fontFamily: {
                sans: ['Montserrat', 'Helvetica', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
