import axios from "axios";
import { getToken } from "./auth";
const host = process.env.NODE_ENV === 'production' ? window.location.host : 'http://localhost:3333'
const api = axios.create({
  baseURL: host
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;