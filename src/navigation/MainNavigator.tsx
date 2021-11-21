import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { OrderDeliveryScreen } from '../screens/OrderDeliveryScreen';
import { RestaurantScreen } from '../screens/RestaurantScreen';
import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';

type MainNavigatorParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>; // undefined means that route doesn't have params
  OrderDelivery: undefined;
  Restaurant: undefined;
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
        <Screen name="OrderDelivery" component={OrderDeliveryScreen} />
        <Screen name="Restaurant" component={RestaurantScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
