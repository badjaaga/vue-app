export interface IMovie {
  id: string;
  posterUrl: string;
  title: string;
  genres: string[];
  releaseYear: string;
  rating?: number;
  description?: string;
  duration?: number;
}
