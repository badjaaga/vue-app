import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { IMovie } from "@/modules/movies/services/models";
import { RootState } from "@/store/types";
// @ts-ignore
import mockData from "@/modules/__mock__/movies.json";

export interface MoviesState {
  movies: IMovie[];
  movie: IMovie | null;
  loading: boolean;
  error: string | null;
}

const state: MoviesState = {
  movies: [],
  movie: null,
  loading: false,
  error: null,
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
    commit("setLoading", true);
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
};

const moviesModule: Module<MoviesState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default moviesModule;
