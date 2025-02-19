import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Redux/categorySlice";
import productSlice from "../Redux/productSlice";
import cartSlice from "../Redux/cartSlice";

const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    pr: productSlice,
    cr: cartSlice,
  },
});

export default store;
