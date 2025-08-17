import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL  ,
  headers: {
    "Content-Type": "application/json",
  },
});

//runs before sending the request object to the server
axiosClient.interceptors.request.use(async (config) => {
  return config;
});

//The response interceptor helps you transform the response before it reaches the .then() block, so you can return only the data or modify the response structure.
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
