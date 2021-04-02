import axios from 'axios';

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


export const createProduct=async (payload,setLoading,setMessage,cb)=>{
    setLoading(true);
    try {

        const res = await axios.post(`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products`,payload);
        if (res.status === 201 && res?.data) {
            console.log(res?.data);
           
           
            setLoading(false)
            setMessage("Product Created Successfully");
            cb();

        }



    } catch (error) {
        setMessage(error?.response?.data?.message);
        setLoading(false)
    }



}
export const getSingleProductById=async (id,setSingleData,setLoading)=>{
    setLoading(true);
    try {

        const res = await axios.get(`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products/${id}`);
        if (res) {
            console.log(res);
            setSingleData(res?.data)
           
            setLoading(false)
          
           

        }



    } catch (error) {
      console.log(error)
        setLoading(false)
    }



}

export const updateProduct=async (id,payload,setLoading,setMessage)=>{
    setLoading(true);
    try {

        const res = await axios.put(`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products/${id}`,payload);
        if (res) {
            console.log(res);
             setLoading(false);
             setMessage("Product Updated Successfully");
          
           

        }



    } catch (error) {
        setMessage(error?.response?.data?.message);
        setLoading(false)
    }



}