import axios from "axios";

export const postNewUser = async (firstName, lastName, email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    console.error("Some error Occured try after some time.");
    return error;
  }
};
