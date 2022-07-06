import AsyncStorageLib from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: "http://api.perseu.app:4000",
  // baseURL: "http://18.228.120.234:4000"
});


api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorageLib.getItem('@Perseu:token')

    if (token) {
      if (!config.headers) config.headers = {}

      config.headers.Authorization = token;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err)
  }
)

