import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Пример правил (настройте под ваш проект)
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);