
import * as requestedServer from './Api';
import { productSlice } from './Slice';
const { actions: slice } = productSlice;

export const getAllProductsActions = (setLoading, pageNo, pageSize, searchValue) => (dispatch) => {
    setLoading(true)

    return requestedServer.getAllProducts(pageNo, pageSize, searchValue).then((res) => {
        const { status, data } = res;
        if (status === 200) {
            setLoading(false)


            dispatch(slice.setProducts(data));


        }

    }).catch((err) => {
        setLoading(false)

        console.log(err)

    })

}