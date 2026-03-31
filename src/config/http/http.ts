import axios from "axios";
import {baseUrl} from "./base-url.ts";

export const http = axios.create({
    withCredentials: true,
    baseURL: baseUrl(),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
});