import { ref } from "vue";

export const dateFilter = ref(formatDate);

function formatDate(date: Date): number | string | Date {
  if (typeof date.getMonth === "function") {
    return date.getFullYear();
  }

  return date;
}
