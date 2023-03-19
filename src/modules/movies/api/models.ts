export interface IMovie {
  id: number;
  title: string;
  storyline: string;
  vote_average: number;
  vote_count: number;
  releaseDate: string;
  posterurl: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  duration: number | null;
  ratings: number[];
  imdbRating: number;
}
