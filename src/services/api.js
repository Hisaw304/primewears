import axios from "axios";

const api = axios.create({
  baseURL: "https://random-unhappy-phobia.ngrok-free.dev/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",

    "ngrok-skip-browser-warning": "true",
  },
});

export default api;
