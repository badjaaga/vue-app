import { createApp } from "vue";
import App from "./modules/movies/MoviesPage.vue";
import lazyImageDirective from "@/directives/LazyLoadingDirective";
import { dateFilter } from "@/filters/date";
import { durationFilter } from "@/filters/duration";

const app = createApp(App);

app.directive("lazy-image", lazyImageDirective);

app.config.globalProperties.$filters = {
  dateFormat: dateFilter.value,
  durationFormat: durationFilter.value,
};

app.mount("#app");
