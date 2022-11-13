import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:8000/api",
//  headers: { "Content-Type": "application" },
});

export default request;
