<template>
  <header :class="{ search: !selectedMovie, movie: selectedMovie }">
    <div class="content-wrapper">
      <div class="nav-panel">
        <span>
          <img src="@/assets/logo.svg" alt="logo" />
        </span>

        <span v-if="selectedMovie" @click="toggleHeaderMode('search')">
          <img src="@/assets/icons/search.svg" alt="logo" />
        </span>
      </div>

      <TopContainer :movie="selectedMovie" />
    </div>
  </header>

  <SortSection :movies-count="movies.length" />

  <section v-if="!isLoading" class="movies">
    <div class="content-wrapper">
      <ParagraphLarge v-if="!movies.length">No films found</ParagraphLarge>

      <ul v-else class="movies__container">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          class="movie__card"
          :movie="movie"
          @click="toggleHeaderMode('selectMovie', movie.id)"
        />
      </ul>
    </div>
  </section>

  <CustomLoader class="movies" v-else />

  <footer>
    <img src="@/assets/logo.svg" alt="logo" />
  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { IMovie } from "@/modules/movies/services/models";
import CustomLoader from "@/modules/movies/shared/CustomLoader.vue";
import TopContainer from "@/modules/movies/TopContainer.vue";
import SortSection from "@/modules/SortSection.vue";
import MovieCard from "@/modules/movies/MovieCard.vue";
import ParagraphLarge from "@/modules/movies/shared/ParagraphLarge.vue";
import { MOVIES } from "@/modules/movies/__mocks__/movies";

let isLoading = ref<boolean>(true);
let movies = ref<IMovie[]>([]);
let selectedMovie = ref<IMovie>();

onMounted(() => {
  setTimeout(() => {
    movies.value = MOVIES;
    isLoading.value = false;
  }, 500);
});

const toggleHeaderMode = (mode: "search" | "selectMovie", id?: string) => {
  if (mode === "selectMovie" && id) {
    selectedMovie.value = movies.value.find((movie: IMovie) => movie.id === id);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
  if (mode === "search") {
    selectedMovie.value = undefined;
  }
};
</script>

<style lang="scss">
@import "normalize-scss/sass/normalize/import-now";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

button:active {
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px 0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  background-image: url("@/assets/header.png");
  min-height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  .search {
    padding: 20px 60px 150px 60px;
  }
  .movie {
    padding: 20px 60px 50px 60px;
  }
}

.nav-panel {
  padding: 20px 60px 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movies {
  display: flex;
  background-color: #424242;
  min-height: calc(100vh - 570px);
}

.movies__container {
  margin: 60px 0 60px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc((1200px - (3 * 350px)) / 3);
  padding: 0;
}

.movie__card {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

footer {
  box-sizing: border-box;
  background-color: #555555;
  height: 70px;
  padding: 23px 0;
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
