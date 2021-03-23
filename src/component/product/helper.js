import axios from 'axios';


export const getAllProducts = async (setter, setLoading, pageNo, pageSize) => {
    setLoading(true);
    const url = pageNo && pageSize ? `https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products?pageNo=${+pageNo}&pageSize=${+pageSize}` : `https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products`
    try {

        const res = await axios.get(url);
        if (res.status === 200 && res?.data) {
            console.log(res?.data)
            setter(res?.data);
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

export const uploadImages = async (files, uploadPreset = 'product_photos') => {
    const photos = [];
    try {
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            console.log(file)
            const formData = new FormData();
            formData.append('file', file?.file);
            formData.append('upload_preset', uploadPreset);
            const res = await axios.post("https://arcane-ravine-98370.herokuapp.com/https://api.cloudinary.com/v1_1/dfmxhltrv/image/upload", formData, {
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
            });
            console.log(res, 'response image');
            photos.push(res.data.url);
          




        }

        return photos;


    } catch (error) {
        return false;
    }

}