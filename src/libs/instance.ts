import axios from "axios";
import config from "../config/config.json";

export const instance = axios.create({
  baseURL: config.SERVER,
});
