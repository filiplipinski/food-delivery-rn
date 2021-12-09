import React, { Dispatch } from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { sizes, colors, fonts } from 'constants/theme';
import { icons } from 'constants/icons';
import { Restaurant } from 'data/restaurants';
import {
  AddOrderItem,
  OrderItem,
  OrderItemsReducerActions,
  RemoveOrderItem,
} from '../reducers/orderItemsReducer';

type Props = {
  restaurant: Restaurant;
  orderItems: OrderItem[];
  dispatchOrderItems: Dispatch<OrderItemsReducerActions>;
};

export const RestaurantInfo = ({
  restaurant,
  orderItems,
  dispatchOrderItems,
}: Props) => {
  const scrollX = new Animated.Value(0);

  const handleAddItem = (menuId: number, price: number) => {
    dispatchOrderItems(AddOrderItem({ menuId, price }));
  };
  const handleRemoveItem = (menuId: number) => {
    dispatchOrderItems(RemoveOrderItem({ menuId }));
  };

  const getOrderQty = (menuId: number) => {
    const orderItem = orderItems.find(a => a.menuId === menuId);

    return orderItem?.qty ?? 0;
  };

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false },
      )}
    >
      {restaurant.menu.map(item => (
        <View key={item.id} style={styles.itemWrapper}>
          <View style={styles.imageWrapper}>
            {/* Image */}
            <Image
              source={item.photo}
              resizeMode="cover"
              style={styles.foodImage}
            />

            {/* Quantity */}
            <View style={styles.quantityWrapper}>
              <TouchableOpacity
                style={[styles.quantityBtn, styles.minusQuantityBtn]}
                onPress={() => handleRemoveItem(item.id)}
              >
                <Text style={{ ...fonts.body1 }}>-</Text>
              </TouchableOpacity>

              <View style={styles.quantityBtn}>
                <Text style={{ ...fonts.h2 }}>{getOrderQty(item.id)}</Text>
              </View>

              <TouchableOpacity
                style={[styles.quantityBtn, styles.plusQuantityBtn]}
                onPress={() => handleAddItem(item.id, item.price)}
              >
                <Text style={{ ...fonts.body1 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Name & Description */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {item.name} - {item.price.toFixed(2)}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          {/* Calories */}
          <View style={styles.caloriesTextContainer}>
            <Image source={icons.fire} style={styles.fireIcon} />

            <Text style={styles.caloriesText}>
              {item.calories.toFixed(2)} cal
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    alignItems: 'center',
    marginTop: 16,
  },
  imageWrapper: {
    height: sizes.height * 0.35,
  },
  quantityWrapper: {
    position: 'absolute',
    bottom: -20,
    width: sizes.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  foodImage: {
    width: sizes.width,
    height: '100%',
  },
  quantityBtn: {
    width: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusQuantityBtn: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  plusQuantityBtn: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  textContainer: {
    width: sizes.width,
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: sizes.padding * 2,
  },
  title: {
    ...fonts.h2,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    ...fonts.body3,
    textAlign: 'center',
  },
  caloriesTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  fireIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  caloriesText: {
    ...fonts.body3,
    color: colors.darkgray,
  },
});
