//import Axios from "../api/BaseUrl";

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      return true;
    }
  } catch (error) {
    return error;
  }
};
