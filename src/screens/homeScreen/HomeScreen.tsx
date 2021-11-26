import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Category } from '../../data/categories';
import { restaurantsData } from '../../data/restaurants';
import { HomeMainCategories } from './components/MainCategories';

import { HomeTopbar } from './components/Topbar';

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleCategorySelect = (category: Category) => {
    const restaurantList = restaurantsData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeTopbar />
      <HomeMainCategories
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8', // TODO: color
  },
});
