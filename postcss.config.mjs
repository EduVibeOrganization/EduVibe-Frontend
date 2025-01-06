/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.ts',
      content: ['./src/**/*.html', './src/**/*.tsx'],
    },
  },
};

export default config;
