import { IMovie } from "@/modules/movies/api/models";
// @ts-ignore
import mockData from "@/modules/__mock__/movies.json";

export class MovieService {
  fetchMovies(): IMovie[] {
    return mockData.movies as IMovie[];
  }

  fetchMovieById(id: number): IMovie {
    return mockData.movies.find((movie: IMovie) => movie.id === id);
  }
}
