import axios from "axios";

export const getAllProducts = async (pageNo, pageSize, searchValue) => {
  console.log("searchvalue", searchValue);
  const search = searchValue ? `keyword=${searchValue}` : "";
  console.log("search", search);
  const url =
    pageNo && pageSize
      ? `https://arcane-ravine-983.herokuapp.com/https://eshop99-api.herokuapp.com/api/products?${search}&pageNo=${+pageNo}&pageSize=${+pageSize}`
      : `https://arcane-ravine-983.herokuapp.com/https://eshop99-api.herokuapp.com/api/products?${search}`;
  return await axios.get(url);
};
