import axios from "axios";
export const removeItemFromCartCall = async (productId) => {
  try {
    const { data, status } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: localStorage.getItem("userLoginToken"),
      },
    });
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
  }
};
