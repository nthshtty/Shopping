import { createAsyncThunk } from "@reduxjs/toolkit";

const getContegories = createAsyncThunk("getContegories", () => {
  const categories = fetch("http://localhost:5001/product/").then((res) =>
    res.json()
  );
  return categories;
});

export default getContegories;
