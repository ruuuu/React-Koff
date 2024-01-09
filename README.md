# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Файл eslintrc.cjs: настройки eslint https://eslint.org/docs/latest/use/configure/rules
module.exports = {
root: true,
env: { browser: true, es2020: true },
extends: [
'eslint:recommended',
'plugin:react/recommended',
'plugin:react/jsx-runtime',
'plugin:react-hooks/recommended',
],
ignorePatterns: ['dist', '.eslintrc.cjs'],
parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
settings: { react: { version: '18.2' } },
plugins: ['react-refresh'],
rules: {
'react-refresh/only-export-components': [
'warn',
{ allowConstantExport: true },
],
"react/react-in-jsx-scope": "off", // чтобs в jsx файлах не нужно было импортировать REACT
"react/prop-types": "off", // отключили проверки на типы пропсов(строки, числа, массивы, объекты)
"no-console": "off",
"no-loop-func": ["error"],
"eqeqeq": ["error", "always"],
"strict": ["error", "global"]
},
}
