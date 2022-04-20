import axios from "axios";

export const removeItemFromWishlistCall = async (productId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/wishlist/${productId}`,
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { wishlist: data.wishlist, status };
  } catch (error) {
    console.error(error);
  }
};
