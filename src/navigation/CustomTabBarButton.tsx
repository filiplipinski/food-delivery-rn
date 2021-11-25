import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '../constants';

// selected bottom tab curve
const SelectedTabCurveSvg = () => (
  <Svg width={70} height={61} viewBox="0 0 75 61">
    <Path
      d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
      fill={COLORS.white}
    />
  </Svg>
);

export const CustomTabBarButton = ({
  accessibilityState,
  children,
  onPress,
}: BottomTabBarButtonProps) => {
  const isSelected = accessibilityState?.selected;

  if (isSelected) {
    return (
      <View style={styles.circleWrapper}>
        <View style={styles.circleInnerWrapper}>
          <View style={styles.circleSide} />
          <SelectedTabCurveSvg />
          <View style={styles.circleSide} />
        </View>

        <TouchableOpacity onPress={onPress} style={styles.circle}>
          {children}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.tabBarButton}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    paddingBottom: 10,
    height: 60,
    backgroundColor: COLORS.white,
  },
  circleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  circleInnerWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  circleSide: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  circle: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
});
