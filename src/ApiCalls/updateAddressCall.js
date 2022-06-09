import axios from "axios";
export const updateAddressCall = async (address) => {
  try {
    const { data, status } = await axios.post(
      `/api/user/addresses/${address._id}`,
      { address },
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
