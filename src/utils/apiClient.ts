import axios from "axios";

// const apiKey = "4a8c4f28b4f59a2af93c6df47f0ef186";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YThjNGYyOGI0ZjU5YTJhZjkzYzZkZjQ3ZjBlZjE4NiIsInN1YiI6IjY1MmZmY2IyOTQ1ZDM2MDE0ZTk1ODNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.icMLiekHU9xdzFKXscQ42_MIunGgue2WYU-BKzU1a0U",
  },
});

export default apiClient;
