import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/products/productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
    },
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;