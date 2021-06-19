const tailwindcss = require('tailwindcss');


// craco.config.js
module.exports = {

    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],

}