import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://amazon-backend-s6nl.onrender.com",
  // http://127.0.0.1:5000
  // https://amazon-backend-s6nl.onrender.com (render backend)
  // baseURL: "http://127.0.0.1:5001/clone-97f4e/us-central1/api" (firebase backend)
});