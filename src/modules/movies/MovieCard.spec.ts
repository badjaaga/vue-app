import { mount } from "@vue/test-utils";
import MovieCard from "./MovieCard.vue";
import ParagraphMedium from "../movies/shared/ParagraphMedium.vue";
import DateFormat from "../movies/shared/ParagraphMedium.vue";
import { IMovie } from "../movies/api/models";
import { Directive } from "vue";

describe("MovieCard", () => {
  let wrapper: any;
  let movie: IMovie;

  const mockLazyImageDirective: Directive = {
    mounted: jest.fn(),
    unmounted: jest.fn(),
  };

  beforeEach(() => {
    movie = {
      id: 447365,
      title: "Guardians of the Galaxy Vol. 3",
      storyline: "",
      vote_average: 5.6,
      vote_count: 9,
      releaseDate: "2020-05-01",
      posterurl:
        "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
      overview: "The third film based on Marvel's Guardians of the Galaxy.",
      budget: 0,
      revenue: 0,
      genres: ["Action", "Adventure", "Science Fiction"],
      duration: null,
      ratings: [1, 2, 3],
      imdbRating: 9.0,
    };
    wrapper = mount(MovieCard, {
      props: {
        movie,
      },
      global: {
        components: {
          ParagraphMedium,
          DateFormat,
        },
        directives: {
          "lazy-image": mockLazyImageDirective,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders the movie title", () => {
    expect(wrapper.findComponent(ParagraphMedium).text()).toBe(movie.title);
  });

  it("renders the movie release year", () => {
    const year = new Date(movie.releaseDate).getFullYear();
    expect(wrapper.find(".movie-card__release-year").text()).toBe(
      year.toString()
    );
  });

  it("renders the movie genres", () => {
    expect(
      wrapper.findAll(".movie-card__genre").map((genre: any) => genre.text())
    ).toEqual(movie.genres);
  });

  it("should call the mounted function of lazy-image directive when mounted", () => {
    expect(mockLazyImageDirective.mounted).toHaveBeenCalled();
  });

  it("should call the unmounted function of lazy-image directive when unmounted", async () => {
    await wrapper.unmount();

    expect(mockLazyImageDirective.unmounted).toHaveBeenCalled();
  });
});
