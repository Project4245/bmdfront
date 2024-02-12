import axios from "axios";

export const BASE_URL = "https://bmdpro.onrender.com/bmd/";
// export const BASE_URL = "http://localhost:8081/bmd/";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
