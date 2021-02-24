import { localStorageSlice } from './Slice';
const { actions: slice } = localStorageSlice;

export const setAddToCartActions = (payload) => (dispatch) => {


    dispatch(slice.setCartItems(payload))
}
export const removeAddToCartActions = (payload) => (dispatch) => {


    dispatch(slice.removeCartItems(payload))
}

export const setCartItemsEmptyActions = () => (dispatch) => {
    dispatch(slice.setCartItemsEmpty())
}