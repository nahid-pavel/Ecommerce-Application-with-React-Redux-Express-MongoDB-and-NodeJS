import axios from "axios";

export const getUserProfile = async (setter) => {
  try {
    const res = await axios.get(
      "https://arcane-ravine-983.herokuapp.com/https://eshop99-api.herokuapp.com/api/users/profile"
    );
    if (res.status === 200 && res?.data) {
      const { name, email } = res?.data;
      const data = {
        name,
        email,
        password: "",
        confirmPassword: "",
      };
      console.log("got data", data);

      setter(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const updateUserProfile = async (
  payload,
  setLoading,
  setMessage,
  getUserProfileById
) => {
  setLoading(true);
  try {
    const res = await axios.put(
      "https://arcane-ravine-983.herokuapp.com/https://eshop99-api.herokuapp.com/api/users/profile",
      payload
    );
    if (res.status === 200 && res?.data) {
      setLoading(false);
      getUserProfileById();
      setMessage("Updated successfully");
    }
  } catch (error) {
    console.log(error.message);
    setLoading(true);
  }
};
