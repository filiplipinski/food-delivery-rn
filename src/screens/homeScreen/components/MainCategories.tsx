import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../../../constants';
import { categoriesData, Category } from '../../../data/categories';

type HomeMainCategoriesProps = {
  selectedCategory: Category | null;
  onCategorySelect: (category: Category) => void;
};

export const HomeMainCategories = ({
  selectedCategory,
  onCategorySelect,
}: HomeMainCategoriesProps) => {
  return (
    <View>
      <Text style={styles.header}>Main Categories</Text>

      <FlatList
        data={categoriesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedCategory?.id === item.id;

          return (
            <TouchableOpacity
              onPress={() => onCategorySelect(item)}
              style={[
                styles.categoryContainer,
                isSelected && styles.selectedCategoryContainer,
              ]}
            >
              <View
                style={[
                  styles.innerWrapper,
                  isSelected && styles.selectedInnerWrapper,
                ]}
              >
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={styles.icon}
                />
              </View>

              <Text style={[styles.text, isSelected && styles.selectedText]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...FONTS.h1,
    fontWeight: 'normal',
    marginTop: SIZES.padding * 3,
    marginBottom: SIZES.padding,
    marginLeft: SIZES.padding * 2,
  },
  flatListContainer: {
    paddingLeft: SIZES.padding * 2,
    paddingRight: SIZES.padding * 2,
    paddingBottom: SIZES.padding * 2, // required, otherwise boxShadow bottom is cut
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    marginRight: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.basic.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  selectedCategoryContainer: {
    backgroundColor: COLORS.primary,
  },
  icon: {
    width: 30,
    height: 30,
  },
  innerWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  selectedInnerWrapper: {
    backgroundColor: COLORS.white,
  },
  text: {
    ...FONTS.body5,
    marginTop: SIZES.padding,
    color: COLORS.black,
  },
  selectedText: {
    color: COLORS.white,
  },
});
