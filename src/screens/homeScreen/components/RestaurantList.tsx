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

import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { categoriesData } from '../../../data/categories';
import { PriceRatingEnum, Restaurant } from '../../../data/restaurants';
import { MainNavigatorParamList } from '../../../navigation/MainNavigator';

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
            navigation.navigate('Restaurant');
            // TODO:
            // navigation.navigate('Restaurant', {
            //   item,
            //   currentLocation,
            // })
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={styles.image}
            />

            <View style={styles.durationTextContainer}>
              <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
            </View>
          </View>

          <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

          <View style={styles.detailsContainer}>
            <Image source={icons.star} style={styles.starImage} />
            <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

            <View style={styles.categories}>
              {item.categories.map(categoryId => {
                return (
                  <View style={styles.category} key={categoryId}>
                    <Text style={{ ...FONTS.body3 }}>
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
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 60, // bottomBar height + some space
  },
  itemContainer: {
    marginBottom: SIZES.padding * 2,
  },
  durationTextContainer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.basic.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  imageContainer: {
    marginBottom: SIZES.padding,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius,
  },
  detailsContainer: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
  },
  starImage: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
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
    ...FONTS.body3,
    color: COLORS.darkgray,
    marginLeft: 5,
    marginRight: 5,
  },
  price: {
    ...FONTS.body3,
    color: COLORS.basic.black,
  },
  priceCheaper: {
    color: COLORS.darkgray,
  },
});
