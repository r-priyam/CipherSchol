const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{tsx,js,ts}'],
    theme: {
        extend: {
            fontFamily: {
                // set default font to mono
                sans: { ...defaultTheme.fontFamily.mono }
            }
        }
    },
    plugins: []
};
