// eslint.config.cjs (НОВЫЙ ФОРМАТ FLAT CONFIG)

// 1. Импорты всех необходимых модулей
const globals = require('globals');
const pluginJs = require('@eslint/js'); // Для eslint:recommended
const tseslint = require('typescript-eslint'); // Для TypeScript плагина и парсера
const pluginReact = require('eslint-plugin-react'); // Для React правил
const pluginReactHooks = require('eslint-plugin-react-hooks'); // Для React Hooks правил
const pluginPrettier = require('eslint-plugin-prettier'); // Для Prettier плагина
const configPrettier = require('eslint-config-prettier'); // Для отключения конфликтующих правил

module.exports = [
  // 2. Игнорируемые файлы (замена ignorePatterns)
  {
    ignores: ['dist/', 'node_modules/', '.eslintcache'], // Добавьте .eslintcache, если ESLint его создает
    linterOptions: {
      // 2. Переместите reportUnusedDisableDirectives внутрь linterOptions
      reportUnusedDisableDirectives: 'error',
    },
  },

  // 3. Базовая рекомендованная конфигурация JavaScript
  pluginJs.configs.recommended,

  // 4. Конфигурации для TypeScript
  ...tseslint.configs.recommended, // Эквивалентно 'plugin:@typescript-eslint/recommended'
  ...tseslint.configs.stylistic, // Дополнительные стилистические правила TypeScript (по желанию)

  // 5. Конфигурация для React и TypeScript файлов
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Применяем эти правила только к JS/TS/JSX/TSX файлам
    languageOptions: {
      parser: tseslint.parser, // Используем парсер TypeScript
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest', // Или '2020', если хотите быть конкретным
        sourceType: 'module',
        // project: './tsconfig.json', // Раскомментируйте, если используете правила, требующие инф. о типах (например, strict-boolean-expressions)
      },
      // Замена 'env' - определяем глобальные переменные
      globals: {
        ...globals.browser, // window, document и т.д.
        // ...globals.node,    // Если у вас есть Node.js код в проекте (например, для server-side rendering или утилиты)
        // ...globals.es2020, // В зависимости от 'ecmaVersion', может быть неявно включено
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier, // Подключаем плагин Prettier
      // 'react-refresh': require('eslint-plugin-react-refresh'), // Если еще нужен, добавьте
    },
    settings: {
      react: {
        version: 'detect', // Автоматически определять версию React
      },
    },
    rules: {
      // 6. Правила ESLint и TypeScript
      // Отключаем правило react-refresh, если оно не нужно или если вы не используете Vite HMR
      // 'react-refresh/only-export-components': [
      //   'warn',
      //   { allowConstantExport: true },
      // ],

      // Отключаем правило react/react-in-jsx-scope для React 17+
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off', // Тоже для React 17+

      // Правила из eslint-plugin-react-hooks
      ...pluginReactHooks.configs.recommended.rules,

      // Ваши кастомные правила
      '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
      '@typescript-eslint/no-explicit-any': 'off', // Отключить ошибку о 'any'

      // 7. Правила Prettier (через eslint-plugin-prettier)
      // Включаем рекомендуемые правила Prettier, которые отключают конфликтующие правила ESLint
      ...configPrettier.rules, // Отключает правила, конфликтующие с Prettier

      'prettier/prettier': [
        // Настраиваем сам Prettier
        'error',
        {
          endOfLine: 'lf',
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: 'es5',
        },
      ],
      // Добавь здесь другие правила ESLint, которые тебе нравятся
    },
  },
];
