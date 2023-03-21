import { createRouter, createWebHistory } from "vue-router";
import App from "./modules/movies/MoviesPage.vue";
import NotFoundPage from "./modules/not-found-page/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    component: App,
    name: "home",
  },
  { path: "/movie/:id", name: "movie", component: App },
  { path: "/:catchAll(.*)", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
