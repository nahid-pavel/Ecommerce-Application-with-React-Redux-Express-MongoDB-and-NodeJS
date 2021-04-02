import axios from 'axios';

export const deleteSingleData = async(id,getAllProductsLanding)=>{
    try {

        const res = await axios.delete(`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products/${id}`);
        if (res.status === 200 && res?.data) {
            console.log(res?.data);

            getAllProductsLanding();

        }



    } catch (error) {
        console.log(error.message);
        
    }

}