import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

import type {Product} from "@/entities/product";

export interface CartSchema {
    items: Product[];
}

const initialState: CartSchema = {items: []};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
    },
});

export const {actions: cartActions, reducer: cartReducer} = cartSlice;
