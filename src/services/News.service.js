import axios from "axios";

class NewsService {
  login(userData) {
    return axios.post("http://localhost:3001/auth/v1/", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  auth(token) {
    return axios.post(
      "http://localhost:3001/auth/v1/isAuthenticated",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  readNews(token) {
    return axios.get("http://localhost:3001/api/v1/news", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return;
}
export default new NewsService();
