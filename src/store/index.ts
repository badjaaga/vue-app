import { createStore } from "vuex";
import moviesModule from "@/store/modules/movies";

export default createStore({
  modules: {
    movies: moviesModule,
  },
});
