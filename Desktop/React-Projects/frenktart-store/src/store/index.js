import { createStore } from "redux";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.product.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, { ...action.product, amount: 1 }];
      }

      const addedTotalAmount =
        state.totalAmount + (Number(action.product.price) || 0);
      return {
        ...state,
        items: updatedItems,
        totalAmount: addedTotalAmount,
      };

    case "REMOVE":
      const index = state.items.findIndex((item) => item.id === action.id);
      const currentItem = state.items[index];
      let updatedItemsRemove;

      if (currentItem && currentItem.amount > 1) {
        const updatedItem = { ...currentItem, amount: currentItem.amount - 1 };
        updatedItemsRemove = [...state.items];
        updatedItemsRemove[index] = updatedItem;
      } else {
        updatedItemsRemove = state.items.filter(
          (item) => item.id !== action.id
        );
      }
      const removedTotalAmount = currentItem
        ? state.totalAmount - (Number(currentItem.price) || 0)
        : state.totalAmount;
      return {
        ...state,
        items: updatedItemsRemove,
        totalAmount: removedTotalAmount,
      };

    case "CLEAR":
      return {
        ...state,
        items: [],
        totalAmount: 0,
      };

    case "CHECKOUT":
      return {
        ...state,
        items: [],
        totalAmount: 0,
      };
  }

  return state;
};

const store = createStore(cartReducer);

export default store;
