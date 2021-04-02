import { setCartItemsEmptyActions } from '../../localStorageRedux/Actions';
import * as requestedServer from './Api';
import { authSlice } from './Slice';
const { actions: slice } = authSlice;


export const loginAction = (email, password, setLoading, history, link, setMessage,setShow) => (dispatch) => {

    setLoading(true)
    return requestedServer.loginApi(email, password).then((res) => {
        const { status, data } = res;
        if (status === 200) {

            setLoading(false);
            dispatch(slice.setLogin(data));
            history.push(link);

        }

    }).catch((err) => {
        setLoading(false);
        setShow(true)
        setMessage(err?.response?.data?.message)


    })
}

export const logOutAction = () => (dispatch) => {
    dispatch(slice.setLogout());
    dispatch(setCartItemsEmptyActions());
}

export const getUserProfileActions = () => (dispatch) => {

    return requestedServer.getUserProfile().then((res) => {
        const { status, data } = res;
        if (status === 200) {


            dispatch(slice.setUserProfile(data));


        }

    }).catch((err) => {

        console.log(err)

    })

}
