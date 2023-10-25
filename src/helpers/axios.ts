import { BASE_URL } from "@/config";
import axios from "axios";

export const client = axios.create({
  baseURL: BASE_URL,
});
