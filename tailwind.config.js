/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        main: '0.7rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px'
      }
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          // colors is used here for demonstration purposes
          colors: {
            primary: '#272626',
            secondary: '#fff',
            background: '#fff',
            hover: '#cccccc'
          }
        }
      },
      themes: [
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: 'light',
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: '#000',
              'primary-light': '#303030',
              secondary: '#fff',
              background: '#fff',
              hover: '#272826',
              border: '#000'
            }
          }
        },
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: 'dark',
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: '#fff',
              'primary-light': '#d7d6d6',
              secondary: '#000',
              background: '#0d0d0d',
              hover: '#202020',
              border: '#33333390'
            }
          }
        },
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: 'cyberpunk',
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: '#000',
              'primary-light': '#303030',
              secondary: '#ffee00',
              background: '#ffee00',
              hover: '#333000',
              border: '#000'
            }
          }
        }
      ]
    })
    // ...
  ]
}
