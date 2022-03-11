import axios from "axios";

export const Signin = async (newAdmin) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/user/signin`,
      newAdmin
    );
    return response;
  } catch (error) {
    return error;
  }
};
