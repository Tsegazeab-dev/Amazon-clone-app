import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-97f4e/us-central1/api",
  baseURL: "http://127.0.0.1:5000"
});