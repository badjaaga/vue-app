<template>
  <span class="movie-info__accent"
    >{{ valueComputed.hours }}
    h
    {{ valueComputed.minutes }}
    min</span
  >
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps<{ value: number }>();

const valueComputed = computed(() => {
  return {
    hours: Math.floor(props.value / 60),
    minutes: Math.floor(props.value % 60),
  };
});
</script>

<style scoped>
.movie-info__accent {
  color: inherit;
}
</style>
