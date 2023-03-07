import { createApp } from "vue";
import App from "./modules/movies/MoviesPage.vue";
import lazyImageDirective from "@/directives/LazyLoadingDirective";

const app = createApp(App);

app.directive("lazy-image", lazyImageDirective);

app.mount("#app");
