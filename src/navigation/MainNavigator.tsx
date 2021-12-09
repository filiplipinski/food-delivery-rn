import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { RestaurantScreen } from 'screens/restaurantScreen/RestaurantScreen';
import { Restaurant } from 'data/restaurants';
import { NotFoundScreen } from 'screens/NotFoundScreen';

import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';

export type MainNavigatorParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>; // undefined means that route doesn't have params
  OrderDelivery?: { screenName: string }; // TODO: placeholder
  Restaurant: {
    restaurant: Restaurant;
  };
};

const { Navigator, Screen } = createStackNavigator<MainNavigatorParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="BottomTab"
      >
        <Screen name="BottomTab" component={BottomTabNavigator} />
        <Screen
          name="OrderDelivery"
          initialParams={{ screenName: 'Order Delivery' }} // TODO: placeholder
          component={NotFoundScreen}
        />
        <Screen name="Restaurant" component={RestaurantScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
