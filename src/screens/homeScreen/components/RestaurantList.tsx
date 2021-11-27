import { NavigationProp, useNavigation } from '@react-navigation/core';
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
import { icons } from 'constants/icons';
import { categoriesData } from 'data/categories';
import { PriceRatingEnum, Restaurant } from 'data/restaurants';
import { MainNavigatorParamList } from 'navigation/MainNavigator';

type HomeRestaurantListProps = {
  restaurants: Restaurant[];
};

const getCategoryNameById = (id: number) => {
  let category = categoriesData.find(c => c.id === id);

  return category?.name || '';
};

export const HomeRestaurantList = ({
  restaurants,
}: HomeRestaurantListProps) => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  return (
    <FlatList
      data={restaurants}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate('Restaurant', {
              restaurant: item,
            });
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={styles.image}
            />

            <View style={styles.durationTextContainer}>
              <Text style={{ ...fonts.h4 }}>{item.duration}</Text>
            </View>
          </View>

          <Text style={{ ...fonts.body2 }}>{item.name}</Text>

          <View style={styles.detailsContainer}>
            <Image source={icons.star} style={styles.starImage} />
            <Text style={{ ...fonts.body3 }}>{item.rating}</Text>

            <View style={styles.categories}>
              {item.categories.map(categoryId => {
                return (
                  <View style={styles.category} key={categoryId}>
                    <Text style={{ ...fonts.body3 }}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <Text style={styles.middot}>&bull;</Text>
                  </View>
                );
              })}

              {[
                PriceRatingEnum.Affordable,
                PriceRatingEnum.FairPrice,
                PriceRatingEnum.Expensive,
              ].map(priceRating => {
                const isCheaperOrEqual = priceRating >= item.priceRating;

                return (
                  <Text
                    key={priceRating}
                    style={[
                      styles.price,
                      isCheaperOrEqual && styles.priceCheaper,
                    ]}
                  >
                    $
                  </Text>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: sizes.padding * 2,
    paddingBottom: 60, // bottomBar height + some space
  },
  itemContainer: {
    marginBottom: sizes.padding * 2,
  },
  durationTextContainer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: sizes.width * 0.3,
    backgroundColor: colors.white,
    borderTopRightRadius: sizes.radius,
    borderBottomLeftRadius: sizes.radius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.basic.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  imageContainer: {
    marginBottom: sizes.padding,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: sizes.radius,
  },
  detailsContainer: {
    marginTop: sizes.padding,
    flexDirection: 'row',
  },
  starImage: {
    height: 20,
    width: 20,
    tintColor: colors.primary,
    marginRight: 10,
  },
  categories: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  category: {
    flexDirection: 'row',
  },
  middot: {
    ...fonts.body3,
    color: colors.darkgray,
    marginLeft: 5,
    marginRight: 5,
  },
  price: {
    ...fonts.body3,
    color: colors.basic.black,
  },
  priceCheaper: {
    color: colors.darkgray,
  },
});
