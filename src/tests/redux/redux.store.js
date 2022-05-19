import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const list = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    setList(state, action) {
      return { list: action.payload };
    },
  },
});

export const { setList } = list.actions;

export default list.reducer;
