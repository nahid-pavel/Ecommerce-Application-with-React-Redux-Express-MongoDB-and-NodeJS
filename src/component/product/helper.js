import axios from 'axios';


export const getAllProducts = async (setter, setLoading) => {
    setLoading(true)
    try {

        const res = await axios.get('https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products');
        if (res.status === 200 && res?.data) {
            console.log(res?.data?.products);

            setter(res?.data?.products);
            setLoading(false)

        }



    } catch (error) {
        console.log(error.message);
        setLoading(true)


    }





}

export const getSingleProduct = async (id, setter, setLoading) => {
    setLoading(true)
    try {

        const res = await axios.get(`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products/${id}`);
        if (res.status === 200 && res?.data) {
            console.log(res?.data);

            setter(res?.data);
            setLoading(false)

        }



    } catch (error) {
        console.log(error.message);
        setLoading(true)


    }





}