import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import toggleReducer from "../features/toggle/toggle";
import formReducer from "../features/form/form";


export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    form: formReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);
