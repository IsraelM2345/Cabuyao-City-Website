/** @type {import('tailwindcss').Config} */
export default {
    // 1. THIS IS THE MAGIC LINE FOR DARK MODE
    darkMode: "class",

    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            // 2. YOUR BRAND COLORS
            colors: {
                // Your custom logo colors
                evac: "#0AEDF8",
                tech: "#AFE6E7",

                // Your main gradient/theme colors organized as a palette
                brand: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488", // Your primary deep teal
                    700: "#0f766e", // Your secondary deep teal
                    800: "#115e59",
                    900: "#134e4a",
                },
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};
