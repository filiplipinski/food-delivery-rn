import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home} from './screens/Home';
import {OrderDelivery} from './screens/OrderDelivery';
import {Restaurant} from './screens/Restaurant';
import {Tabs} from './navigation/Tabs';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Tabs} />
        {/* <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Restaurant" component={Restaurant} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
