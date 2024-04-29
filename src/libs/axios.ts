import axios from "axios";

const api = axios.create({
  baseURL: 'http://nexifytw.mynetgear.com:45000/',
  timeout: 10000,
});

export default api;