import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { IMovie } from "@/modules/movies/api/models";
import { RootState } from "@/store/types";
// @ts-ignore
import mockData from "@/modules/__mock__/movies.json";

export type SortOptions = "release date" | "rating";

export interface MoviesState {
  movies: IMovie[];
  movie: IMovie | null;
  loading: boolean;
  error: string | null;
  sortBy: SortOptions;
}

const state: MoviesState = {
  movies: [],
  movie: null,
  loading: true,
  error: null,
  sortBy: "release date",
};

const getters: GetterTree<MoviesState, RootState> = {
  getAllMovies(state: MoviesState) {
    return state.movies;
  },
  getLoadingState(state: MoviesState) {
    return state.loading;
  },
  getMovieById(state: MoviesState) {
    return state.movie;
  },
};

const mutations: MutationTree<MoviesState> = {
  setMovies(state, movies: IMovie[]) {
    state.movies = movies;
  },
  setLoading(state, loading: boolean) {
    state.loading = loading;
  },
  setError(state, error: string | null) {
    state.error = error;
  },
  setMovie(state, movie: IMovie) {
    state.movie = movie;
  },
};

const actions: ActionTree<MoviesState, any> = {
  async fetchMovies({ commit }) {
    try {
      //const movieService = inject<MovieService>("movieService");
      //const response = await movieService?.fetchMovies();
      //const movies = response.data;
      const movies = mockData.movies;
      commit("setMovies", movies);
    } catch (error: any) {
      commit("setError", error.message);
    }
    commit("setLoading", false);
  },
  async fetchMovieById({ commit }, id) {
    try {
      //const movieService = inject<MovieService>("movieService");
      //const response = await movieService?.fetchMovies();
      //const movies = response.data;
      const movie = mockData.movies.find((movie: IMovie) => movie.id === id);
      commit("setMovie", movie);
    } catch (error: any) {
      commit("setError", error.message);
    }
  },
  sortMovies({ commit, state }, sortOption: SortOptions) {
    let sortBy: "release_date" | "vote_average";
    switch (true) {
      case sortOption === "release date":
        sortBy = "release_date";
        break;
      case sortOption === "rating":
        sortBy = "vote_average";
        break;
      default:
        sortBy = "release_date";
    }
    const sortedMovies = [...state.movies].sort((a, b) => {
      // compare the objects based on the specified criteria
      // @ts-ignore
      if (a[sortBy] < b[sortBy]) return -1;
      // @ts-ignore
      if (a[sortBy!] > b[sortBy!]) return 1;
      return 0;
    });
    console.log(sortedMovies, sortBy);
    commit("setMovies", sortedMovies);
  },
};

const moviesModule: Module<MoviesState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default moviesModule;
