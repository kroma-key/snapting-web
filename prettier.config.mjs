import * as tailwindcss from 'prettier-plugin-tailwindcss'

const config = {
  plugins: [tailwindcss],
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  bracketSpacing: true,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
}

export default config