import axios from "axios";

const instance = axios.create({
    method: "GET",
    baseURL: "https://cors-anywhere.herokuapp.com/",
    timeout: 1000 * 120,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "*",
        "Access-Control-Allow-Header": "*",
        "X-Requested-With": "XMLHttpRequest"
    }
});

/**
 * Request interceptor
 */
/*instance.interceptors.request.use(
    // get the token to pass in the header
    function(config) {
        const token = localStorage.getItem("TOKEN");
        config.headers.Authorization = token;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * Response interceptor
 */
/*instance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response);
    }
);*/

export default instance;
