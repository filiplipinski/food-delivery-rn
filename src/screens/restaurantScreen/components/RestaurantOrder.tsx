import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { sizes, colors, fonts } from 'constants/theme';
import { icons } from 'constants/icons';
import { MainNavigatorParamList } from 'navigation/MainNavigator';
import { formatCurrency } from 'helpers/formatCurrency';

import { OrderItem } from '../reducers/orderItemsReducer';

type Props = {
  orderItems: OrderItem[];
};

export const RestaurantOrder = ({ orderItems }: Props) => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  const { basketItemCount, basketTotal } = useMemo(() => {
    return orderItems.reduce(
      (prev, curr) => ({
        basketItemCount: prev.basketItemCount + curr.qty,
        basketTotal: prev.basketTotal + curr.total,
      }),
      { basketItemCount: 0, basketTotal: 0 },
    );
  }, [orderItems]);

  return (
    <View>
      <View
        style={{
          backgroundColor: colors.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View style={styles.orderInfoWrapper}>
          <Text style={{ ...fonts.h3 }}>{basketItemCount} items in Cart</Text>
          <Text style={{ ...fonts.h3 }}>{formatCurrency(basketTotal)}</Text>
        </View>

        <View style={styles.locationWrapper}>
          <View style={styles.innerWrapper}>
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={styles.icon}
            />
            <Text style={{ marginLeft: sizes.padding, ...fonts.h4 }}>
              Location
            </Text>
          </View>

          <View style={styles.innerWrapper}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={styles.icon}
            />
            <Text style={{ marginLeft: sizes.padding, ...fonts.h4 }}>8888</Text>
          </View>
        </View>

        <View style={styles.orderBtnContainer}>
          <TouchableOpacity
            style={styles.orderBtn}
            onPress={() => navigation.navigate('OrderDelivery')}
          >
            <Text style={styles.orderBtnText}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isIphoneX() && (
        //   wypelnienie ekranu na dole
        <View
          style={{
            position: 'absolute',
            bottom: -34,
            left: 0,
            right: 0,
            height: 34,
            backgroundColor: colors.white,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: sizes.padding * 2,
    paddingHorizontal: sizes.padding * 3,
    borderBottomColor: colors.lightGray2,
    borderBottomWidth: 1,
  },
  locationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: sizes.padding * 2,
    paddingHorizontal: sizes.padding * 3,
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.darkgray,
  },
  orderBtnContainer: {
    padding: sizes.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderBtn: {
    width: sizes.width * 0.9,
    padding: sizes.padding,
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: sizes.radius,
  },
  orderBtnText: {
    color: colors.white,
    ...fonts.h2,
  },
});
