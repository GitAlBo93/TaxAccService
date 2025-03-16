module.exports = {
  root: true, // Указывает, что это корневой конфиг
  env: {
    browser: true, // Поддержка браузерного окружения
    es2021: true, // Поддержка ES2021
    node: true, // Поддержка Node.js
  },
  extends: [
    'standard',
    'eslint:recommended', // Рекомендуемые правила ESLint
    'plugin:react/recommended', // Рекомендуемые правила для React
    'plugin:@typescript-eslint/recommended', // Рекомендуемые правила для TypeScript
    'plugin:prettier/recommended', // Интеграция Prettier с ESLint
  ],
  parser: '@typescript-eslint/parser', // Используем парсер TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Поддержка JSX
    },
    ecmaVersion: 12, // Версия ECMAScript
    sourceType: 'module', // Используем модули
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    // Примеры правил
    'react/react-in-jsx-scope': 'off', // Отключаем правило, так как React 17+ не требует импорта React
    'react/prop-types': 'off', // Отключаем проверку prop-types, так как используем TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Отключаем требование явного указания типов возвращаемых значений
    'prettier/prettier': 'error', // Включаем Prettier как правило ESLint
    'no-console': 'warn', // Предупреждаем об использовании console.log
    'react-hooks/rules-of-hooks': 'error', // Проверяем правила использования хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости хуков
    'import/no-anonymous-default-export': 'error', // Запрещает анонимные экспорты по умолчанию
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' }, // Запрещает фигурные скобки для строковых пропсов и детей
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // Пустая строка перед return
    ],
  },
  settings: {
    react: {
      version: 'detect', // Автоматически определяем версию React
    },
  },
};
