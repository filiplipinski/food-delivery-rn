import { ReducerAction } from 'types/reducer';

export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';
export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';

export type OrderItem = {
  menuId: number;
  qty: number; // quantity
  total: number;
  price: number;
};

// actions creators
export const AddOrderItem = (
  payload: AddOrderItemPaylod,
): AddOrderItemAction => ({
  type: ADD_ORDER_ITEM,
  payload,
});

export const RemoveOrderItem = (
  payload: RemoveOrderItemPaylod,
): RemoveOrderItemAction => ({
  type: REMOVE_ORDER_ITEM,
  payload,
});

type AddOrderItemType = 'ADD_ORDER_ITEM';
type RemoveOrderItemType = 'REMOVE_ORDER_ITEM';
type AddOrderItemPaylod = {
  menuId: OrderItem['menuId'];
  price: number;
};
type RemoveOrderItemPaylod = {
  menuId: OrderItem['menuId'];
};
type AddOrderItemAction = ReducerAction<AddOrderItemType, AddOrderItemPaylod>;
type RemoveOrderItemAction = ReducerAction<
  RemoveOrderItemType,
  RemoveOrderItemPaylod
>;

// reducer types
type OrderItemsReducerState = OrderItem[];
export type OrderItemsReducerActions =
  | AddOrderItemAction
  | RemoveOrderItemAction;

export const orderItemsReducer = (
  state: OrderItemsReducerState,
  action: OrderItemsReducerActions,
) => {
  switch (action.type) {
    case ADD_ORDER_ITEM: {
      const existingItemIndex = state.findIndex(
        a => a.menuId === action.payload.menuId,
      );

      if (existingItemIndex >= 0) {
        const newQty = state[existingItemIndex].qty + 1;

        state[existingItemIndex].qty = newQty;
        state[existingItemIndex].total =
          newQty * state[existingItemIndex].price;

        return [...state];
      }

      const newItem: OrderItem = {
        qty: 1,
        menuId: action.payload.menuId,
        price: action.payload.price,
        total: action.payload.price,
      };

      return [...state, newItem];
    }

    case REMOVE_ORDER_ITEM: {
      const existingItemIndex = state.findIndex(
        a => a.menuId === action.payload.menuId,
      );

      if (existingItemIndex === -1) {
        return state;
      }

      if (state[existingItemIndex].qty) {
        const newQty = state[existingItemIndex].qty - 1;

        state[existingItemIndex].qty = newQty;
        state[existingItemIndex].total =
          newQty * state[existingItemIndex].price;
      }

      if (state[existingItemIndex].qty === 0) {
        state.splice(existingItemIndex, 1);
      }

      return [...state];
    }

    default:
      throw new Error("Action type doesn't exist in orderItemsReducer");
  }
};
