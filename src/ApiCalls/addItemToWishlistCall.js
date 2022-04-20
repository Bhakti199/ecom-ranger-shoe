import axios from "axios";
export const addItemToWishlistCall = async (product) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { wishlist: data.wishlist, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
