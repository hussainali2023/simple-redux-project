import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/products/productSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware().concat(api.middleware))
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;