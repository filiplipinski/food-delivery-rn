import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { colors, sizes } from 'constants/theme';
import { Menu } from 'data/restaurants';

type Props = {
  menu: Menu[];
  scrollX: Animated.Value;
};

export const RestaurantDots = ({ menu, scrollX }: Props) => {
  const dotPosition = Animated.divide(scrollX, sizes.width);

  const getDotProperties = (itemIndex: number) => {
    const opacity = dotPosition.interpolate({
      inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp',
    });

    const size = dotPosition.interpolate({
      inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
      outputRange: [sizes.base * 0.8, 10, sizes.base * 0.8],
      extrapolate: 'clamp',
    });

    const color = dotPosition.interpolate({
      inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
      outputRange: [colors.darkgray, colors.primary, colors.darkgray],
      extrapolate: 'clamp',
    });

    return { opacity, size, color };
  };

  return (
    <View style={styles.dotsContainer}>
      {menu.map((item, index) => {
        const { opacity, size, color } = getDotProperties(index);

        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              ...styles.dot,
              width: size,
              height: size,
              backgroundColor: color,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 30,
    marginVertical: 16,
  },
  dot: {
    borderRadius: sizes.radius,
    marginHorizontal: 6,
  },
});
