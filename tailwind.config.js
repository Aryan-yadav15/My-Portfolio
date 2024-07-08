/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    screens: {
      'xsm': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xlg': '1440px',
      '2xlg': '1800px',
    },
    extend: {
      transitionProperty: {
        'custom-all': 'all',
        'width': 'width', // Add width as a transition property
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out': 'ease-in-out', // Add ease-in-out for smooth transitions
      },
      transitionDuration: {
        'custom': '150ms',
        'custom-long': '400ms',
        '500': '500ms', // Add 500ms duration for smoother transitions
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        customDarkGray: '#161616',
        primaryText: '#ebebeb',
        Secondarytext: '#7a7a7a'
      },
      flex: {
        '1': '1 1 0%',
        '2': '2 2 0%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
