import { createLogger, createStore } from "vuex";
import moviesModule from "@/store/modules/movies";
import { RootState } from "@/store/types";
import { MovieService } from "@/modules/movies/api/MovieService";

export default createStore<RootState>({
  plugins: [createLogger()],
  modules: {
    movies: moviesModule,
  },
  state: {
    service: new MovieService(),
  },
});
