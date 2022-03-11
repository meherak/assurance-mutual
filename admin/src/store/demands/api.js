import axios from "axios";
import { getConfig } from "../helper/config";

export const getAllDemand = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/admin-api/v1/admin/`,
      getConfig()
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getDemand = async ({ queryKey }) => {
  try {
    const [_key, { id }] = queryKey;
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/admin-api/v1/admin/${id}`,
      getConfig()
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const removeAdmin = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_URL}/admin-api/v1/admin/delete/${id}`,
      getConfig()
    );
    return response;
  } catch (error) {
    return error;
  }
};
