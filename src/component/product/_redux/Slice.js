import { createSlice } from "@reduxjs/toolkit";

const initState = {
    allProducts: [],
    isLoading: false,
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initState,
    reducers: {
        setProducts: (state, action) => {
            const { payload } = action;
            state.allProducts = payload;

        }



    }


})
