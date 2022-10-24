import axios from "axios";

const instance = axios.create({
  baseURL: "https://hplussport.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getProducts = () => instance.get("/products/order/price");
