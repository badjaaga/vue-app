import { createApp } from "vue";
import App from "./App.vue";
import lazyImageDirective from "@/directives/LazyLoadingDirective";
import { MovieService } from "@/modules/movies/api/MovieService";
import store from "@/store/index";
import { router } from "@/router";

const app = createApp(App);
const movieServiceProvider = new MovieService();

app.directive("lazy-image", lazyImageDirective);
app.provide("movieService", movieServiceProvider);
app.use(store);
app.use(router);

app.mount("#app");
