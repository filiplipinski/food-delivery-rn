import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import { colors, fonts, sizes } from 'constants/theme';
import { categoriesData, Category } from 'data/categories';

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
    ...fonts.h1,
    fontWeight: 'normal',
    marginTop: sizes.padding * 3,
    marginBottom: sizes.padding,
    marginLeft: sizes.padding * 2,
  },
  flatListContainer: {
    paddingLeft: sizes.padding * 2,
    paddingRight: sizes.padding * 2,
    paddingBottom: sizes.padding * 2, // required, otherwise boxShadow bottom is cut
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.padding,
    paddingBottom: sizes.padding * 2,
    marginRight: sizes.padding,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    shadowColor: colors.basic.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  selectedCategoryContainer: {
    backgroundColor: colors.primary,
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
    backgroundColor: colors.lightGray,
  },
  selectedInnerWrapper: {
    backgroundColor: colors.white,
  },
  text: {
    ...fonts.body5,
    marginTop: sizes.padding,
    color: colors.black,
  },
  selectedText: {
    color: colors.white,
  },
});
