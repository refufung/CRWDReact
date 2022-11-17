import axios from "axios";
let request = axios.create({
  timeout: 200000,
  headers: {
    get: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    post: {
      "Content-Type": "application/json;charset=utf-8",
    },
  },
});

request.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    console.log("errorhandle", error);
    return window.Promise.reject(error);
  }
);
export default request;
