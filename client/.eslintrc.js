module.exports = {
  extends: 'airbnb-base',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-plusplus': 'off',
    'import/no-cycle': [
      'off',
    ],
    'no-console': 'off',
    'import/no-mutable-exports': 'off',
    'no-use-before-define': 'off',
  },
};
