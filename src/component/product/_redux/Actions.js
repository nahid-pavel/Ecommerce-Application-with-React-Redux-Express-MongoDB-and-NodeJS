
import * as requestedServer from './Api';
import { productSlice } from './Slice';
const { actions: slice } = productSlice;



const getSuggestions = (value,products) => {

    console.log('from s',products)
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
   // Here I get data from cities.json
    return inputLength === 0 ? [] : products?.products?.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    ).slice(0,5);
  };

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
export const getSearchProductsActions = (setLoading, pageNo, pageSize, searchValue) => (dispatch) => {
    setLoading(true)

    return requestedServer.getAllProducts(pageNo, pageSize, searchValue).then((res) => {
        const { status, data } = res;
        if (status === 200) {
            setLoading(false)


            dispatch(slice.setSearchedProducts(getSuggestions(searchValue,data)));


        }

    }).catch((err) => {
        setLoading(false)

        console.log(err)

    })

}