import React, { useReducer } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons } from 'constants/icons';
import { Topbar } from 'ui/Topbar';
import { MainNavigatorParamList } from 'navigation/MainNavigator';
import { colors } from 'constants/theme';

import { RestaurantInfo } from './components/RestaurantInfo';
import { orderItemsReducer } from './reducers/orderItemsReducer';

type RestaurantScreenProps = {
  navigation: NavigationProp<MainNavigatorParamList>;
  route: RouteProp<MainNavigatorParamList, 'Restaurant'>;
};

export const RestaurantScreen = ({
  navigation,
  route,
}: RestaurantScreenProps) => {
  const restaurant = route.params.restaurant;
  const [orderItems, dispatchOrderItems] = useReducer(orderItemsReducer, []);

  return (
    <SafeAreaView style={styles.container}>
      <Topbar
        location={route.params.restaurant.name}
        leftIcon={icons.back}
        rightIcon={icons.list}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => {}}
      />

      <RestaurantInfo
        restaurant={restaurant}
        orderItems={orderItems}
        dispatchOrderItems={dispatchOrderItems}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
