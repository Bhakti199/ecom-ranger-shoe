import axios from "axios";
export const addItemToCartCall = async (product) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    console.log(data);
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
  }
};
