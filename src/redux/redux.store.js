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

// const userInfo = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {
//     setUser(state, action) {
//       state.push({
//         user: action.payload.user,
//       });
//     },
//   },
// });

export const { setList } = list.actions;

export default list.reducer;
