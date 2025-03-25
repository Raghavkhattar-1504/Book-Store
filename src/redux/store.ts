import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import bookReducer from "./bookSlice";

export const store = configureStore({
    reducer: {
        book : bookReducer,
        cart: cartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


