import { ref } from "vue";

export const durationFilter = ref(formatDuration);

function formatDuration(duration: number): string {
  return `<${Math.floor(duration / 60)} h ${duration % 60} min `;
}
