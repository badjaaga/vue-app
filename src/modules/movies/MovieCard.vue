<template>
  <div class="movie-card">
    <img :src="movie.posterUrl" alt="poster" />
    <div class="movie-card__title">
      <ParagraphMedium>{{ props.movie.title }}</ParagraphMedium>
      <span class="movie-card__release-year">{{
        props.movie.releaseYear
      }}</span>
    </div>
    <ul class="movie-card__genres">
      <li
        v-for="genre in props.movie.genres"
        :key="genre"
        class="movie-card__genre"
      >
        {{ genre }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IMovie } from "@/modules/movies/services/models";
import ParagraphMedium from "@/modules/movies/shared/ParagraphMedium.vue";

interface IProps {
  movie: IMovie;
}
const props = defineProps<IProps>();
</script>

<style scoped>
.movie-card {
  width: 350px;
}
.movie-card__release-year {
  font-weight: 300;
  font-size: 14px;
  color: #979797;
  border: 1px solid #979797;
  padding: 3px 8px;
  border-radius: 4px;
}
.movie-card__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
.movie-card__genres {
  margin: 0;
  padding: 0;
  color: #979797;
}

.movie-card__genre {
  margin: 0;
  list-style: none;
  display: inline-block;
}

.movie-card__genre ~ .movie-card__genre::before {
  content: ", ";
}
</style>
