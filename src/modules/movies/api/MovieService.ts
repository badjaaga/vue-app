import { IMovie } from "@/modules/movies/services/models";

export class MovieService {
  private apiUrl = "";

  async fetchMovies(): Promise<IMovie[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data;
  }
}
