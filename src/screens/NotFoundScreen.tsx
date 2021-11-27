import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';

import { fonts } from 'constants/theme';
import { BottomTabParamList } from 'navigation/BottomTabNavigator';

type Props = {
  // TODO; mozna by to ladniej zrobic niz od "Like"
  route: RouteProp<BottomTabParamList, 'Like'>;
};

export const NotFoundScreen = ({ route }: Props) => {
  const { screenName } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ ...fonts.h4, marginBottom: 16 }}>
        Hello on <Text style={{ fontWeight: 'bold' }}>{screenName}</Text>{' '}
        screen!
      </Text>
      <Text style={{ ...fonts.h2 }}>Page is not available yet ☹</Text>
    </SafeAreaView>
  );
};
