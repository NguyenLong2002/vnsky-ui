/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 4px 10px 0px rgba(0, 0, 0, 0.3)',
        'full': '0px 0px 10px 6px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        primary: '#005baa',
        pinkColor:'#d3196d',
        redColor: '#d91d24'
       
      },
      backgroundImage: {
        'step1-esim': "url('./assets/images/step1-esim_img.png')",
        'step1w-esim': "url('./assets/images/step1w-esim_img.png')",
        'step2-esim': "url('./assets/images/step2-esim_img.png')",
        'step2w-esim': "url('./assets/images/step2w-esim_img.png')",
        'step3-esim': "url('./assets/images/step3-esim_img.png')",
        'step3w-esim': "url('./assets/images/step3w-esim_img.png')",
        'bg2-esim_img':" url('./assets/images/bg2-esim_img.webp')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
