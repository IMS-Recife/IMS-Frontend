import axios from "axios";
import { toast } from "react-toastify";

const dadoApi = axios.create({
  baseURL: "https://api.dado.work/",
});

const handleSuccessResponse = (res) => res;

const handleErrorResponse = (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      default:
        toast.error(`${error.response.status}: ${error.response.statusText}`, {
          className: "error-toast",
        });
        break;
    }
  }
  return Promise.reject(error);
};

dadoApi.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export default dadoApi;
