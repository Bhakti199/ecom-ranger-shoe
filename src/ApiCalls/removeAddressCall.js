import axios from "axios";

export const removeAddressCall = async (addressId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/addresses/${addressId}`,
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { addresses: data.addresses, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
