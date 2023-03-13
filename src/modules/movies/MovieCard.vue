<template>
  <div class="movie-card">
    <img v-lazy-image="movie.poster_path" />
    <div class="movie-card__title">
      <ParagraphMedium>{{ props.movie.title }}</ParagraphMedium>
      <span class="movie-card__release-year">
        <DateFormat :value="props.movie?.release_date" />
      </span>
    </div>
    <ul class="movie-card__genres">
      <li
        v-for="genre in props.movie.genres.join(', ')"
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
import { IMovie } from "@/modules/movies/api/models";
import ParagraphMedium from "@/modules/movies/shared/ParagraphMedium.vue";
import DateFormat from "@/modules/movies/shared/DateFormat.vue";

interface IProps {
  movie: IMovie;
}
const props = defineProps<IProps>();
</script>

<style scoped>
.movie-card {
  width: 350px;

  img {
    width: 100%;
    border: none; /* Remove border */
  }
}

.error-placeholder {
  width: 350px;
  height: 450px;
  background-image: url("@/assets/image-not-found.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none; /* Remove border */
}

.lazy {
  width: 350px;
  height: 450px;
  animation-name: image-skeleton;
  animation-duration: 3s;
  border: none; /* Remove border */
}

@keyframes image-skeleton {
  0% {
    background-color: #232323;
  }
  25% {
    background-color: #424242;
  }
  50% {
    background-color: #555555;
  }
  100% {
    background-color: #ffffff;
  }
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
</style>
