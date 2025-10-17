/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,vue}', // добавлены .vue файлы
        './public/**/*.html', // если есть HTML в public
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
