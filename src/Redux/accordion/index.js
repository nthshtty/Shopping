import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    item: ["Coat", "Shirt", "Pants", "Party wear"],
  },
  {
    category: "Women",
    item: ["Coat", "Shirt", "Pants", "Party wear"],
  },
  {
    category: "Kids",
    item: ["Coat", "Shirt", "Pants", "Party wear"],
  },
];

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
});

export default accordionSlice;
