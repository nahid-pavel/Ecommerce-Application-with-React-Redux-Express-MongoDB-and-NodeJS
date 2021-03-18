import axios from "axios";

export const getAllProducts = async (pageNo, pageSize, searchValue)=>{
    const search = searchValue ? `keyword=${searchValue}&`:''
    const url = pageNo && pageSize?`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products?${search}pageNo=${+pageNo}&pageSize=${+pageSize}`:`https://arcane-ravine-98370.herokuapp.com/https://eshop99-api.herokuapp.com/api/products`
    return await axios.get(url);
}