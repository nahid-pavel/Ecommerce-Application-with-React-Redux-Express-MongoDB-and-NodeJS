import { createSlice } from "@reduxjs/toolkit";

const initState = {
    allProducts: [],
    searchedProducts:[],
    isLoading: false,
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initState,
    reducers: {
        setProducts: (state, action) => {
            const { payload } = action;
            state.allProducts = payload;

        },
        setSearchedProducts: (state, action) => {
            const { payload } = action;
            state.searchedProducts = payload;

        }



    }


})
