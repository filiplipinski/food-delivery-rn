import React from 'react';
import { View } from 'react-native';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { COLORS } from '../constants';

export const CustomTabBar = (props: BottomTabBarProps) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        />
        <BottomTabBar {...props} />
      </View>
    );
  }

  return <BottomTabBar {...props} />;
};
