import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'screens/homeScreen/HomeScreen';
import { NotFoundScreen } from 'screens/NotFoundScreen';
import { colors } from 'constants/theme';
import { icons, Icons } from 'constants/icons';

import { CustomTabBar } from './CustomTabBar';
import { CustomTabBarButton } from './CustomTabBarButton';

export type BottomTabParamList = {
  Home: undefined;
  Search: { screenName: string };
  Like: { screenName: string };
  User: { screenName: string };
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const getTabScreenOptions = ({
  iconName,
}: {
  iconName: Icons;
}): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({ focused }) => (
      <Image
        source={icons[iconName]}
        resizeMode="contain"
        style={[styles.tabBarIcon, focused && styles.focusedTabBarIcon]}
      />
    ),
    tabBarButton: CustomTabBarButton,
  };
};

export const BottomTabNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      tabBar={CustomTabBar}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={getTabScreenOptions({ iconName: 'cutlery' })}
      />
      <Screen
        name="Search"
        component={NotFoundScreen}
        initialParams={{ screenName: 'Search' }}
        options={getTabScreenOptions({ iconName: 'search' })}
      />
      <Screen
        name="Like"
        component={NotFoundScreen}
        initialParams={{ screenName: 'Like' }}
        options={getTabScreenOptions({ iconName: 'like' })}
      />
      <Screen
        name="User"
        component={NotFoundScreen}
        initialParams={{ screenName: 'User' }}
        options={getTabScreenOptions({ iconName: 'user' })}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  tabBarIcon: {
    width: 25,
    height: 25,
    tintColor: colors.secondary,
  },
  focusedTabBarIcon: {
    tintColor: colors.primary,
  },
});
