<template>
  <header>
    <div class="content-wrapper">
      <img src="@/assets/logo.svg" alt="logo" />

      <div class="search">
        <HeadingLarge>Find your movie</HeadingLarge>
        <div class="search__input">
          <CustomInput placeholder="Search movie" />
          <PrimaryButton>Search</PrimaryButton>
        </div>
        <div class="search__options">
          <CustomToggle
            toggle-type="search by"
            :toggle-options="searchByOptions"
          />
        </div>
      </div>
    </div>
  </header>

  <section class="sort">
    <div class="content-wrapper">
      <div class="sort__flex-box">
        <ParagraphMedium v-show="movies.length">
          {{ movies.length }} items found
        </ParagraphMedium>
        <CustomToggle toggle-type="search by" :toggle-options="sortByOptions" />
      </div>
    </div>
  </section>

  <section v-if="!isLoading && movies.length" class="movies">
    <div class="content-wrapper">
      <h1 v-if="!movies.length">No films found</h1>
      <ul v-else class="movies__container">
        <li v-for="movie in movies" :key="movie.id" class="movie__card">
          <img :src="movie.posterUrl" alt="poster" />{{ movie.id }}
          {{ movie.title }}
        </li>
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
import CustomToggle from "./shared/CustomToggle.vue";
import CustomInput from "./shared/CustomInput.vue";
import PrimaryButton from "./shared/PrimaryButton.vue";
import HeadingLarge from "./shared/HeadingLarge.vue";
import ParagraphMedium from "@/modules/movies/shared/ParagraphMedium.vue";
import { IMovie } from "@/modules/movies/services/models";
import CustomLoader from "@/modules/movies/shared/CustomLoader.vue";
import { MOVIES } from "@/modules/movies/__mocks__/movies";

const searchByOptions = ["title", "genre"];
const sortByOptions = ["release date", "rating"];

let isLoading = ref<boolean>(true);
let movies = ref<IMovie[]>([]);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    movies.value = MOVIES;
  }, 500);
});
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

header {
  padding: 20px 60px 150px 60px;
  background-image: url("@/assets/header.png");
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.search {
  margin: 60px 60px 0;
}

.search__input {
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.search__input input {
  flex: 1;
}

.search__options {
  margin-top: 25px;
}

.sort {
  padding: 20px 60px 20px 60px;
  background-color: #555555;
}

.sort__flex-box {
  margin: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sort__flex-box .toggle__container {
  margin-left: auto;
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
