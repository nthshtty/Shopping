import { createAsyncThunk } from "@reduxjs/toolkit";

const getProduct = createAsyncThunk("getProduct", async () => {
  const product = await fetch("http://localhost:5001/getProduct/").then((res) =>
    res.json()
  );
  return product;
});

export default getProduct;
