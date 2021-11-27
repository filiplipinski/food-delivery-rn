import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons } from '../constants';
import { Topbar } from '../ui/Topbar';
import { MainNavigatorParamList } from '../navigation/MainNavigator';

type RestaurantScreenProps = {
  navigation: NavigationProp<MainNavigatorParamList>;
  route: RouteProp<MainNavigatorParamList, 'Restaurant'>;
};

export const RestaurantScreen = ({
  navigation,
  route,
}: RestaurantScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Topbar
        location={route.params.restaurant.name}
        leftIcon={icons.back}
        rightIcon={icons.list}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => {}}
      />
      <Text>Restaurant</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8', // TODO: color
  },
});
