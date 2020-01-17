import axios from "axios";
import { call_backend_api } from "./api.backend.js";

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export function login(email, password) {
  return call_backend_api("/auth/login", "post", { email, password });
  // return axios.post(LOGIN_URL, { email, password });
}

export function register(name, email, password) {
  return call_backend_api("/auth/signup", "post", { name, email, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // return axios.get(ME_URL);
}
