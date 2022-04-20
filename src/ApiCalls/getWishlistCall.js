import axios from "axios";
export const getWishlistCall = async () => {
  try {
    const { data, status } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: localStorage.getItem("userLoginToken"),
      },
    });
    console.log(data.wishlist);
    return data.wishlist;
  } catch (error) {
    console.error(error);
  }
};
