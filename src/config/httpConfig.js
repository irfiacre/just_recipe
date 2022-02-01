import axios from "axios";

const baseUrl = "https://api.spoonacular.com";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accepted: "appication/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
