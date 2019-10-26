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

export default instance;
