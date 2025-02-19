import { createSlice } from "@reduxjs/toolkit";


interface SimpleUser {
  name: string;
  email: string;
}

const initialState: SimpleUser = {
  name: "",
  email: "",
}

const simpleUserSlice = createSlice({
  name: "simpleUser",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    initUser: (state) => {
      state = initialState;
    }
  }
})

export const { setUser, initUser } = simpleUserSlice.actions;
export default simpleUserSlice.reducer;