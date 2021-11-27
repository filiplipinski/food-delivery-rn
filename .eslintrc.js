module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-native', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
