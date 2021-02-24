import * as requestedServer from './Api';
import { authSlice } from './Slice';
const { actions: slice } = authSlice;

export const loginAction = (email, password, setLoading, history, link) => (dispatch) => {

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
        console.log(err?.response?.data?.message)


    })
}
