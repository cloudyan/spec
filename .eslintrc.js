// npm i -D @babel/eslint-parser eslint-config-airbnb-base
// npm i -D eslint-config-prettier eslint-plugin-import eslint-formatter-pretty
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    // npm i -D eslint-config-airbnb-base eslint-config-prettier
    // npm i -D @typescript-eslint/eslint-plugin eslint-plugin-react
    'airbnb-base', // 对应 eslint
    // 'plugin:react/recommended',

    // // https://github.com/jsx-eslint/eslint-plugin-react#configuration
    // 'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended', // eslint-plugin-react-hooks

    'prettier', // 需要放在 extends 最后，且去除所有后续的 rules
  ],
  plugins: [
    // // npm i -D eslint-plugin-react eslint-plugin-promise eslint-plugin-react-hooks
    // // 'eslint-comments',
    // // 'import',
    // 'react',
    // // 'jsx-a11y', // 这个暂时不必要
    // 'promise',
    // // 'jest',
    // // 'unicorn', // 可强制约束文件命名格式，默认 kebabCase 格式
    // 'react-hooks',
    // // 'markdown', // 和 markdownlint 冲突
  ],
  settings: {
    // support import modules from TypeScript files in JavaScript files
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'], // : ['.js', '.jsx'],
    //   },
    // },
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    // },
    // // 'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    // 'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    // polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  //     // As mentioned in the comments, you should extend TypeScript plugins here,
  //     // instead of extending them outside the `overrides`.
  //     // If you don't want to extend any rules, you don't need an `extends` attribute.
  //     extends: [
  //       'airbnb-typescript/base',
  //       'plugin:@typescript-eslint/recommended',
  //       'plugin:@typescript-eslint/recommended-requiring-type-checking',
  //       'prettier',
  //     ],

  //     parser: '@typescript-eslint/parser',
  //     parserOptions: {
  //       project: ['./tsconfig.json'], // Specify it only for TypeScript files
  //     },
  //   },
  // ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': 'off',
    'no-mixed-operators': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': 'off',
    'no-shadow': [
      'error',
      {
        allow: ['res', 'data', 'err', 'cb', 'state', 'resolve', 'reject', 'done'],
      },
    ],
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': 'off',
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     vars: 'all',
    //     // args: 'after-used',
    //     args: 'none',
    //     caughtErrors: 'none',
    //     ignoreRestSiblings: true,
    //   },
    // ],
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'prefer-template': 'off',
    'prefer-arrow-callback': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'require-yield': [1],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'ignore',
        asyncArrow: 'ignore',
      },
    ],
    // semi: ['off', 'never'],
    'func-names': 'off',
    'consistent-return': 'off',
  },
}
