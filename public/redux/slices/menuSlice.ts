import { createSlice } from "@reduxjs/toolkit";


const initialState: boolean = false;

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: initialState,
  reducers: {
    openMenu: (state, action) => {
      state = action.payload;
    },
    closeMenu: (state) => {
      state = initialState;
    }
  },
})


export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;