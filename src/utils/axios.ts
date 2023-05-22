import axios from "axios";

const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createAxiosInstance = (baseURL: string | undefined) =>
  axios.create({
    baseURL,
  });

/** Base axios instance created */
const baseAxios = createAxiosInstance(PUBLIC_BASE_URL);

/** Base axios request interceptors */
baseAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/** Base axios response interceptors */
baseAxios.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  (err) => {
    console.log(err.response);

    return Promise.reject(err);
  }
);

export { baseAxios };
