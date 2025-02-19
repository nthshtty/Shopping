import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItemprice: 0,
  totalItems: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let itemExits = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      state.totalItemprice = state.totalItemprice + action.payload.price;
      state.totalQuantity = ++state.totalQuantity;
      if (!itemExits) {
        state.totalItems = ++state.totalItems;
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    addQuantity: (state, action) => {
      if (action.payload.opr === "+") {
        ++state.cartItems[action.payload.key].quantity;
        state.totalItemprice = state.totalItemprice + action.payload.item.price;
        state.totalQuantity = ++state.totalQuantity;
      }
      if (
        action.payload.opr === "-" &&
        state.cartItems[action.payload.key].quantity !== 1
      ) {
        --state.cartItems[action.payload.key].quantity;
        state.totalItemprice = state.totalItemprice - action.payload.item.price;
        state.totalQuantity = --state.totalQuantity;
      }
    },
    removeCartItem: (state, action) => {
      let cart = action.payload.cartData;
      state.totalItemprice =
        cart.totalItemprice -
        cart.cartItems[action.payload.key].quantity *
          cart.cartItems[action.payload.key].price;
      state.cartItems = cart.cartItems.filter(
        (ele, i) => i !== action.payload.key
      );
      state.totalQuantity =
        cart.totalQuantity - cart.cartItems[action.payload.key].quantity;
      --state.totalItems;

      console.log(cart.cartItems[action.payload.key].quantity);
    },
  },
});

export const { addItem, addQuantity, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
