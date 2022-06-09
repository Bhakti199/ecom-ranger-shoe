import axios from "axios";

export const clearCartCall = async () => {
  try {
    const { data, status } = await axios.delete("/api/user/cart/all", {
      headers: {
        authorization: localStorage.getItem("userLoginToken"),
      },
    });
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
  }
};
