import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

import { IMovie } from "@/modules/movies/api/models";
import { RootState } from "@/store/types";

export type SortOptions = "release date" | "rating";
export type SearchByOptions = "title" | "genre";

export interface MoviesState {
  movies: IMovie[];
  movie: IMovie | null;
  loading: boolean;
  error: string | null;
  sortBy: SortOptions;
  searchBy: SearchByOptions;
  searchTerm: string;
}

const state: MoviesState = {
  movies: [],
  movie: null,
  loading: true,
  error: null,
  sortBy: "release date",
  searchBy: "title",
  searchTerm: "",
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
  getSearchByOption(state: MoviesState) {
    return state.searchBy;
  },
  getSearchTerm(state: MoviesState) {
    return state.searchTerm;
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
  setSearchBy(state, option: SearchByOptions) {
    state.searchBy = option;
  },
  setSortBy(state, option: SortOptions) {
    state.sortBy = option;
  },
  setSearchTerm(state, option: string) {
    state.searchTerm = option;
  },
};

const actions: ActionTree<MoviesState, any> = {
  async fetchMovies({ commit, state, rootState }) {
    try {
      const movies = await rootState.service
        .fetchMovies()
        .then((data: IMovie[]) => data);

      let sortBy: "releaseDate" | "imdbRating";

      switch (true) {
        case state.sortBy === "release date":
          sortBy = "releaseDate";
          break;
        case state.sortBy === "rating":
          sortBy = "imdbRating";
          break;
        default:
          sortBy = "releaseDate";
      }

      const sortedMovies = movies
        ?.sort((a: IMovie, b: IMovie) => {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        })
        .filter((movie: IMovie) => {
          if (state.searchBy === "title") {
            return movie.title
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase());
          }

          if (state.searchBy === "genre") {
            return movie.genres.some((genre: any) =>
              genre.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
          }

          return movie;
        });

      commit("setMovies", sortedMovies);
    } catch (error: any) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },

  async fetchMovieById({ commit, rootState }, id) {
    try {
      const movie = await rootState.service.fetchMovieById(id);
      commit("setMovie", movie);
    } catch (error: any) {
      commit("setError", error.message);
    }
  },
  setSearchOption({ commit, dispatch }, option: string) {
    commit("setSearchBy", option);
  },
  setSortByOption({ commit, dispatch }, option: string) {
    commit("setSortBy", option);
    dispatch("fetchMovies");
  },
  setSearchTermString({ commit, dispatch }, option: string) {
    commit("setSearchTerm", option);
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
