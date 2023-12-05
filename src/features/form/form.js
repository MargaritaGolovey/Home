import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    first_name: "",
    last_name: "",
    age: "",
    isMarried: false,
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
