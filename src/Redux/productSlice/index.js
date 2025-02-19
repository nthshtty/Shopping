import { createSlice } from "@reduxjs/toolkit";
import getProduct from "./action";

const initialState = {
  product: [],
  status: "idle",
  err: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    displayProduct: (state, action) => {
      const filteredData = action.payload.product.product.filter(
        (ele) => ele.category_id === action.payload.item.id
      );
      state.product = filteredData;
    },
    filterByPrice: (state, action) => {
      const filteredData = action.payload.product.product.filter(
        (ele) =>
          ele.price >= action.payload.minRange &&
          ele.price <= action.payload.maxRange
      );
      state.product = filteredData;
    },
    filterBySearch: (state, action) => {
      console.log(action.payload.filterData);

      const filteredData = action.payload.filterData.filter((ele) =>
        ele.product_name
          .toLowerCase()
          .includes(action.payload.search.toLowerCase())
      );
      state.product =
        filteredData.length > 0 ? filteredData : action.payload.filterData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "Success";

        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "Rejected";
        state.product = action.error.message;
      });
  },
});

export const {
  displayProduct,
  filterByPrice,
  filterBySearch,
} = productSlice.actions;
export default productSlice.reducer;
