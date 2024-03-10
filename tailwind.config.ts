import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        '1B1B1B': '#1B1B1B',
        'DCE6E6': '#DCE6E6',
        'DC3545': '#DC3545',
        '32BE50': '#32BE50',
        '545454': '#545454',
        'FF733C': '#FF733C',
        'gray-545454': '#545454',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      borderRadius: {
        '27': '27px',
      },
      fontSize: {
        '32px': '32px',
        '58px': '58px',
        '21px': '21px',
        '77px': '77px',
        '16px': '16px',
        '38px': '38px',
      },
      borderWidth: {
        '1': '1px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
