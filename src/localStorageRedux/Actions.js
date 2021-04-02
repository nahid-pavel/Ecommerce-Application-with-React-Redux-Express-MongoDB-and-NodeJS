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
export const setShippingInfoActions = (payload) => (dispatch) => {
    dispatch(slice.setShippingInfo(payload))

}
export const setPaymentInfoActions = (payload) => (dispatch) => {
    dispatch(slice.setPaymentMethod(payload))

}