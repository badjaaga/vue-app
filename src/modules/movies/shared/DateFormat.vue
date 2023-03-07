<template>
  <span class="date">{{ valueComputed }}</span>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps<{ value: Date }>();

const valueComputed = computed(() => {
  return props.value.getFullYear();
});
</script>

<style scoped>
.date {
  color: inherit;
}
</style>
