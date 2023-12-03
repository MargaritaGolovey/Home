import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: [1, 2, 3],
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    updateIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { updateIsOpen, updateMessage } = toggleSlice.actions;

export default toggleSlice.reducer;
