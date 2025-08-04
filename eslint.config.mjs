import hiporepo from 'eslint-config-hiporepo';

export default [
  ...hiporepo,
  {
    rules: {
      // Desabilita a regra no-explicit-any para o SonarQube
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['**/*.spec.ts', '**/*.test.ts', 'test/', '__tests__/',
      '.vscode', 'node_modules', 'public', 'generated', 'dist/'
    ],
  }
];

