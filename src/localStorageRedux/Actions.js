import { localStorageSlice } from './Slice';
const { actions: slice } = localStorageSlice;

export const setAddToCartActions = (payload) => (dispatch) => {


    dispatch(slice.setCartItems(payload))
}
export const removeAddToCartActions = (payload) => (dispatch) => {
    console.log(payload, 'got it')

    dispatch(slice.removeCartItems(payload))
}