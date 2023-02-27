import { IMovie } from "@/modules/movies/services/models";

export const MOVIES: IMovie[] = [
  {
    id: "1",
    title: "Lorem movie",
    releaseYear: "1990",
    posterUrl: "https://picsum.photos/350/450",
    genres: ["Crime", "Horror"],
  },
  {
    id: "2",
    title: "Watch movie",
    releaseYear: "2001",
    posterUrl: "https://picsum.photos/350/450",
    genres: ["Comedy", "Thriller"],
  },
  {
    id: "3",
    title: "Test movie",
    releaseYear: "2020",
    posterUrl: "https://picsum.photos/350/450",
    genres: ["Comedy", "Thriller"],
  },
];
