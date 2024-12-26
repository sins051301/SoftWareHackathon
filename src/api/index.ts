import axios from "axios";

const api = axios.create({
  // TODO: 서버 API 주소로 환경변수 수정
  baseURL: "/",
});

export default api;
