import api from "./api";

export default {
  signup: data => api.post("/signup", data),
  login: data => api.post("/login", data)
};
