import { createSlice } from "@reduxjs/toolkit";
import getContegories from "./action";

const initialState = {
  categories: [],
  status: "idle",
  error: "",
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContegories.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(getContegories.rejected, (state, action) => {
        state.status = "Rejected";
        state.categories = action.error.message;
      })
      .addCase(getContegories.fulfilled, (state, action) => {
        state.status = "Success";
        state.categories = action.payload;
      });
  },
});

//   builder.addCase(getContegories.pending, (state, action) => {
//     state.status = "Success";
//     state.categories = action.payload;
//   });

// builder.addCase(getContegories.rejected, (state, action) => {
//   state.status = "Rejected";
//   state.categories = action.error.message;
// });

//   [getContegories.pending]: (state, action) => {
//     state.status = "Loading...";
//   },
//   [getContegories.fulfilled]: (state, action) => {
//     state.status = "Success";
//     state.categories = action.payload;
//   },
//   [getContegories.rejected]: (state, action) => {
//     state.status = "rejected";
//     state.categories = action.error.message;
//   },

export default categorySlice.reducer;
