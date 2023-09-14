module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['off'],
    'import/prefer-default-export': ['off'],
    quotes: ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/react-in-jsx-scope': ['off'],
    indent: ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'react/prop-types': ['off'],
    'react/destructuring-assignment': ['off'],
  },
};
