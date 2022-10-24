import axios from "axios";

const instance = axios.create({
  baseURL: "https://hplussport.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getProducts = () => instance.get("/products");

export { getProducts };
