<template>
  <span class="movie-info__accent" v-if="props.value">
    {{ valueComputed.hours }} h {{ valueComputed.minutes }} min
  </span>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps<{ value: string }>();

const valueComputed = computed(() => {
  const replaced = props.value?.replace(/\D/g, "");

  let number;

  if (replaced !== "") {
    number = Number(replaced);
    return {
      hours: Math.floor(number / 60),
      minutes: Math.floor(number % 60),
    };
  }
  return props.value;
});
</script>

<style scoped>
.movie-info__accent {
  color: inherit;
}
</style>
