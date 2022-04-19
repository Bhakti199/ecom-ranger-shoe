import axios from "axios";
export const updateCartItemCall = async (productId, updateAction) => {
  try {
    console.log(updateAction, productId);
    const { data, status } = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: updateAction,
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
  }
};
