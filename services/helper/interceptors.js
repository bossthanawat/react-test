import axios from "axios";

/**
 * Intercept all axios request.
 */
axios.interceptors.request.use(
  function(config) {
    // Set headers
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


/**
 * Intercept all axios response.
 */
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);


export default axios;
