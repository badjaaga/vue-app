<template>
  <span class="date">{{ valueComputed }}</span>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps<{ value: string }>();

const valueComputed = computed(() => {
  return props.value?.substring(0, 4) || "";
});
</script>

<style scoped>
.date {
  color: inherit;
}
</style>
