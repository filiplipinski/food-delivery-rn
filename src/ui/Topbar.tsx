import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

import { colors, fonts, sizes } from 'constants/theme';

type TopbarProps = {
  location: string;
  leftIcon: ImageSourcePropType;
  rightIcon: ImageSourcePropType;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
};

export const Topbar = ({
  location,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
}: TopbarProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onLeftIconPress} style={styles.iconContainer}>
        <Image source={leftIcon} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.chipContainer}>
        <View style={styles.chip}>
          <Text style={{ ...fonts.h3 }}>{location}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
        <Image source={rightIcon} resizeMode="contain" style={styles.icon} />
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
    backgroundColor: colors.lightGray5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
  },
});
