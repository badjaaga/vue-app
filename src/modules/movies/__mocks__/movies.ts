import { IMovie } from "@/modules/movies/services/models";

export const MOVIES: IMovie[] = [
  {
    id: "1",
    title: "Lorem movie",
    releaseYear: "1990",
    posterUrl: "https://picsum.photos/350/450",
    genres: ["Crime", "Horror"],
    rating: 4.5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: 45,
  },
  {
    id: "2",
    title: "Watch movie",
    releaseYear: "2001",
    posterUrl: "https://picsum.photos/350/450",
    genres: ["Comedy", "Thriller"],
    rating: 3.2,
    description: "Lorem ipsum dolor sit amet, consectetur adipis",
    duration: 100,
  },
  {
    id: "3",
    title: "Test movie",
    releaseYear: "2020",
    posterUrl: "https://picsum.photos/350/450",
    genres: ["Comedy", "Thriller"],
    rating: 5.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipis",
    duration: 220,
  },
];
