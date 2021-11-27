import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  primary: '#FC6D3F',
  secondary: '#CDCDD2',

  basic: {
    black: '#000',
    white: '#FFF',
  },

  black: '#1E1F20',
  white: '#FFFFFF',

  background: '#F7F7F7',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  lightGray5: '#EFEFF1',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const fonts = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: sizes.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: sizes.h1,
    lineHeight: 36,
  },
  h2: { fontFamily: 'Roboto-Bold', fontSize: sizes.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: sizes.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: sizes.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: sizes.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: sizes.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: sizes.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: sizes.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: sizes.body5,
    lineHeight: 22,
  },
};

export const theme = {
  colors,
  sizes,
  fonts,
};
