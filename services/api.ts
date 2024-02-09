import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.API_BASE_URL || "http://192.168.100.89:3000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use(
  (request) => {
    if (process.env.NODE_ENV === "development") {
      console.debug("Starting Request", request.method, request.url);
    }
    return request;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.debug("Response:", response.status, response.data);
    }
    return response;
  },
  (error) => {
    console.error(
      "Response Error:",
      error.response?.status,
      error.response?.data
    );
    return Promise.reject(error);
  }
);

export default apiClient;