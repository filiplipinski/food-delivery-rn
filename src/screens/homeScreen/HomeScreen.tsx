import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeTopbar } from './components/Topbar';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeTopbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8', // TODO: color
  },
});
