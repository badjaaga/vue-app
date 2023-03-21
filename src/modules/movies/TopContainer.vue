<template>
  <div v-if="movieId" class="movie-info">
    <router-link :to="{ name: 'home' }" class="search_icon">
      <img src="@/assets/icons/search.svg" alt="logo" />
    </router-link>

    <img :src="movie.posterurl" alt="poster" class="poster" />

    <div class="movie-info__description">
      <span class="movie-info__title">
        <ParagraphLarge>{{ movie.title }}</ParagraphLarge>
        <span class="movie-info__rating" v-if="movie?.imdbRating">{{
          movie?.imdbRating
        }}</span>
      </span>

      <span class="movie-info__metrics">
        <p class="movie-info__accent">
          <DateFormat :value="movie.releaseDate" /> year
        </p>

        <p class="movie-info__accent">
          <DurationFormat :value="movie.duration" />
        </p>
      </span>

      <p>{{ movie.storyline }}</p>
    </div>
  </div>

  <div v-else class="search">
    <HeadingLarge>Find your movie</HeadingLarge>

    <form @submit.prevent="handleSearch">
      <div class="search__input">
        <CustomInput
          id="search-movie-input"
          placeholder="Search movie"
          :value="searchTerm"
          @update:value="searchTerm = $event"
        />
        <PrimaryButton type="submit">Search</PrimaryButton>
      </div>
    </form>

    <div class="search__options">
      <CustomToggle
        id="search-by-toggle"
        :toggle-options="searchByOptions"
        :selected-option="searchByOption"
        @toggle-option="handleToggle"
        >Search by</CustomToggle
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import CustomToggle from "./shared/CustomToggle.vue";
import HeadingLarge from "./shared/HeadingLarge.vue";
import CustomInput from "./shared/CustomInput.vue";
import PrimaryButton from "./shared/PrimaryButton.vue";
import DurationFormat from "./shared/DurationFormat.vue";
import ParagraphLarge from "@/modules/movies/shared/ParagraphLarge.vue";
import DateFormat from "./shared/DateFormat.vue";
import { SearchByOption } from "@/modules/movies/types";

const route = useRoute();
const router = useRouter();
const store = useStore();
const searchByOptions = ["title", "genre"];
const searchTerm = ref("");
const searchByOption = ref<SearchByOption>("title");

onBeforeMount(() => {
  const { search, searchBy } = route.query;

  if (search && search !== store.getters["movies/getSearchTerm"]) {
    store.dispatch("movies/setSearchTermString", search);
    searchTerm.value = search as string;
  }

  if (searchBy && searchBy !== store.getters["movies/getSearchByOption"]) {
    store.dispatch("movies/setSortByOption", searchBy);
    searchByOption.value = searchBy as SearchByOption;
  }

  if (movieId.value) {
    store.dispatch("movies/fetchMovieById", movieId.value);
  }
});

const movie = computed(() => {
  return store.getters["movies/getMovieById"];
});

const movieId = computed(() => {
  return route.params.id;
});

watch(movieId, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    store.dispatch("movies/fetchMovieById", newValue);
  }
});

watch(searchTerm, (newValue) => {
  store.dispatch("movies/setSearchTermString", newValue);
});

watch(searchByOption, (newValue) => {
  store.dispatch("movies/setSearchOption", newValue);
});

const handleToggle = (value: SearchByOption) => {
  store.dispatch("movies/setSearchOption", value);
  searchByOption.value = value;
};

const handleSearch = () => {
  store.dispatch("movies/fetchMovies");
  router.push({
    query: {
      search: store.getters["movies/getSearchTerm"],
      searchBy: store.getters["movies/getSearchByOption"],
      sortBy: store.getters["movies/getSortByOption"],
    },
  });
};
</script>

<style scoped>
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

.movie-info {
  position: relative;
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  gap: 60px;
  color: #ffffff;
  min-height: 450px;
}

.movie-info__title {
  display: flex;
  gap: 30px;
}

.movie-info__description {
  display: flex;
  flex-direction: column;
}

.movie-info__rating {
  box-sizing: border-box;
  color: #ffffff;
  font-size: 24px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-info__metrics {
  display: flex;
  gap: 60px;
}

.movie-info__accent {
  color: #f65261;
  font-weight: 500;
}

.poster {
  width: 275px;
}

.search_icon {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, -100%);
}
</style>
