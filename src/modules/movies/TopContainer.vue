<template>
  <div v-if="props.topContainerMode === 'selectMovie'" class="movie-info">
    <img :src="props.movie?.poster_path" alt="poster" class="poster" />

    <div class="movie-info__description">
      <span class="movie-info__title">
        <ParagraphLarge>{{ props.movie.title }}</ParagraphLarge>
        <span class="movie-info__rating" v-if="props.movie.vote_average">{{
          props.movie.vote_average
        }}</span>
      </span>

      <span class="movie-info__metrics">
        <p class="movie-info__accent">
          <DateFormat :value="props.movie.release_date" /> year
        </p>

        <p class="movie-info__accent">
          <DurationFormat :value="props.movie.runtime" />
        </p>
      </span>

      <p>{{ props.movie.description }}</p>
    </div>
  </div>

  <div v-else class="search">
    <HeadingLarge>Find your movie</HeadingLarge>
    <div class="search__input">
      <CustomInput placeholder="Search movie" />
      <PrimaryButton>Search</PrimaryButton>
    </div>
    <div class="search__options">
      <CustomToggle :toggle-options="searchByOptions">Search by</CustomToggle>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import CustomToggle from "./shared/CustomToggle.vue";
import HeadingLarge from "./shared/HeadingLarge.vue";
import CustomInput from "./shared/CustomInput.vue";
import PrimaryButton from "./shared/PrimaryButton.vue";
import { IMovie } from "@/modules/movies/services/models";
import DurationFormat from "./shared/DurationFormat.vue";
import ParagraphLarge from "@/modules/movies/shared/ParagraphLarge.vue";
import DateFormat from "./shared/DateFormat.vue";

interface IProps {
  movie: IMovie;
  topContainerMode: "search" | "selectMovie";
}
const searchByOptions = ["title", "genre"];
const props = defineProps<IProps>();
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
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  gap: 60px;
  color: #ffffff;
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
</style>
