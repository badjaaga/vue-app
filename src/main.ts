import { createApp } from "vue";
import App from "./modules/movies/MoviesPage.vue";
import lazyImageDirective from "@/directives/LazyLoadingDirective";
import { dateFilter } from "@/filters/date";

const app = createApp(App);

app.directive("lazy-image", lazyImageDirective);

app.config.globalProperties.$filters = {
  dateFormat: dateFilter.value,
};

app.mount("#app");
