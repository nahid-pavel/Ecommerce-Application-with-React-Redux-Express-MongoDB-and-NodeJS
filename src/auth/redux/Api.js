import axios from "axios";

export const loginApi = (email, password) => {
  return axios.post(
    `https://arcane-ravine-983.herokuapp.com/http://eshop99-api.herokuapp.com/api/users/login`,
    {
      email,
      password,
    }
  );
};

export const getUserProfile = async () => {
  return await axios.get(
    "https://arcane-ravine-983.herokuapp.com/https://eshop99-api.herokuapp.com/api/users/profile"
  );
};
