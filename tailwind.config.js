module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/ts/**/*.js',  // パスの書き換え
        './resources/ts/**/*.ts',  // 追加
        './resources/ts/**/*.tsx', // 追加
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito'],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
