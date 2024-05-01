import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            'gray-100': '#E1E1E6',
            'gray-300': '#C4C4CC',
            'gray-500': '#8D8D99',
            'gray-700': '#202024',
            'gray-900': '#121214',

            'green-300': '#00B37E',
            'green-500': '#00875F',
        },

        fontSizes: {
            'xl': '3.2rem',
            'lg': '2.4rem',
            'md': '2rem',
            'sl': '1.8rem',
        }
    }
});