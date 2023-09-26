import axios from "axios";

//Base URL
const Axios = axios.create({
  baseURL: "https://admin.shiny-nft.com/api/v1/user/",
});

export const ClientAxios = axios.create({
  baseURL: "http://82.165.56.103:3000/",
});

//Interceptor for token
Axios.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (!req.headers.Authorization && token) {
    req.headers.Authorization = token;
    return req;
  }
  return req;
});

export default Axios;

//4. https://admin.shiny-nft.com/api/v1/user/

//3. http://20.188.59.71:3000/api/v1/user/

//2. http://localhost:8080/api/v1/user/

//1. http://localhost:3000/api/v1/user/
