import { createSlice } from "@reduxjs/toolkit";

const slideMenuState = createSlice({
  name: "slideMenu",
  initialState: { isOpen: false },
  reducers: {
    setSlide: (state, action) => {
      state.isOpen = action.payload;
    }
  }
})

export const { setSlide } = slideMenuState.actions;
export default slideMenuState.reducer;