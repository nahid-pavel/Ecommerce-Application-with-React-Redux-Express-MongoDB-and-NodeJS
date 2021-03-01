import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cartItems: [],
    shippingInfo: "",
    paymentMethod: ""



}

export const localStorageSlice = createSlice({
    name: "localStorageSlice",
    initialState: initState,
    reducers: {
        setCartItems: (state, action) => {
            const { payload } = action;
            const index = state.cartItems.findIndex(item => item._id === payload._id);
            if (index > -1) {

                state.cartItems[index].totalQty = payload.totalQty;

            } else {
                state.cartItems = [...state.cartItems, payload]
            }




        },

        removeCartItems: (state, action) => {
            const { payload } = action;
            const filteredItems = state.cartItems.filter(itm => itm?._id !== payload._id);
            state.cartItems = filteredItems;


        },
        setCartItemsEmpty: (state, action) => {
            state.cartItems = []

        },
        setShippingInfo: (state, action) => {
            const { payload } = action;
            state.shippingInfo = payload;

        },
        setPaymentMethod: (state, action) => {
            const { payload } = action;
            console.log('got payload', payload)
            state.paymentMethod = payload.payment

        }
    }


})