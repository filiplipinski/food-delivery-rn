import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Category } from '../../data/categories';
import { restaurantsData } from '../../data/restaurants';
import { HomeMainCategories } from './components/MainCategories';
import { HomeRestaurantList } from './components/RestaurantList';

import { HomeTopbar } from './components/Topbar';

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleCategorySelect = (category: Category) => {
    if (category.id === selectedCategory?.id) {
      // unselect

      setSelectedCategory(null);
      setRestaurants(restaurantsData); // set to default
      return;
    }
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
      <HomeRestaurantList restaurants={restaurants} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8', // TODO: color
  },
});
