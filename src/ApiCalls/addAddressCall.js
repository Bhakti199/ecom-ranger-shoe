import axios from "axios";
export const addAddressCall = async (address) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/addresses",
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
