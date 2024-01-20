import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Icart {
  products: IProduct[];
}

const initialState: Icart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if(existing){
        existing.quantity = existing.quantity! + 1

      }
      else{

          state.products.push({...action.payload, quantity:1});
      }

    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
