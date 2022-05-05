import axios from "axios";

export const addOrdersCall = async (order) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/orders",
      {
        order,
      },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    console.log(data, status);
    return { orders: data.orders, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
