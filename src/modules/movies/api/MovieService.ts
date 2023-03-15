import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://tame-erin-pike-toga.cyclic.app/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export class MovieService {
  fetchMovies(): Promise<void> {
    return instance
      .get("movies")
      .then((res: AxiosResponse<any, any>) => res.data)
      .catch((err) => console.log(err));
  }

  fetchMovieById(id: number): Promise<void> {
    return instance
      .get(`movies/${id}`)
      .then((res: AxiosResponse<any, any>) => res.data)
      .catch((err) => console.log(err));
  }
}
