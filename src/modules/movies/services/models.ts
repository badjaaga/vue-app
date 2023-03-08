export interface IMovie {
  id: string;
  posterUrl: string;
  title: string;
  genres: string[];
  releaseYear: Date;
  rating?: number;
  description?: string;
  duration?: number;
}
