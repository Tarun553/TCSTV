import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODU0MmRhMWE2OGYyMDg2ZTIyNzViZjEzMmZkMjZmOSIsIm5iZiI6MTc0MDgxMzMwNi4zMTksInN1YiI6IjY3YzJiM2ZhYmY2NjA3NzQ4OTZkZGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d0kavnIBoJgMdF1XAb9_jHxtIByfON5trYrQVLCxLYk'
                   
  },
});
export default instance;
