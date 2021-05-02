import axios from "axios";

export const orderCreate = async (payload, setter, history) => {
  console.log(payload);
  // setLoading(true)
  try {
    const res = await axios.post(
      `https://arcane-ravine-983.herokuapp.com/http://eshop99-api.herokuapp.com/api/orders`,
      payload
    );

    const { status, data } = res;
    if (status === 201) {
      history.push(`/order/${data?._id}`);
    }

    // } else {
    //     toast.error('Something went wrong')

    // }
  } catch (err) {
    console.log(err);
  }
};
