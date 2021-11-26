import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { FONTS, icons, SIZES } from '../../../constants';
import { initialCurrentLocation } from '../../../data/location';

export const HomeTopbar = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={icons.nearby} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.chipContainer}>
        <View style={styles.chip}>
          <Text style={{ ...FONTS.h3 }}>
            {initialCurrentLocation.streetName}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={icons.basket} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    flexDirection: 'row',
    height: 50,
  },
  iconContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  chipContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    width: '80%',
    height: '100%',
    backgroundColor: '#EFEFF1', // TODO: color
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
});
