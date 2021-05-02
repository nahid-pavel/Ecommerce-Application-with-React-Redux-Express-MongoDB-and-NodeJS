import axios from "axios";

export const createAccount = async (
  name,
  email,
  password,
  setLoading,
  setMessage,
  history
) => {
  setLoading(true);

  try {
    const res = await axios.post(
      `https://arcane-ravine-983.herokuapp.com/http://eshop99-api.herokuapp.com/api/users`,
      {
        name,
        email,
        password,
      }
    );

    const { status } = res;

    if (status === 201) {
      setLoading(false);
      setMessage("Successfully Registered");
      history.push("/login");
    }
  } catch (err) {
    setLoading(false);
    setMessage(err?.response?.data?.message);
  }
};
