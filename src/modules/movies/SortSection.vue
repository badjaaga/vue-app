<template>
  <section class="sort">
    <div class="content-wrapper">
      <div class="sort__flex-box">
        <slot />
        <CustomToggle
          class="sort__toggle"
          :toggle-options="sortByOptions"
          @toggle-option="handleToggle"
          >Sort by</CustomToggle
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import CustomToggle from "./shared/CustomToggle.vue";
import { useStore } from "vuex";

interface IProps {
  moviesCount: number;
}
const props = defineProps<IProps>();
const store = useStore();

const sortByOptions = ["release date", "rating"];

const handleToggle = (value: string) => {
  store.dispatch("movies/setSortByOption", value);
};
</script>

<style scoped>
.sort {
  padding: 20px 60px 20px 60px;
  background-color: #555555;
}

.sort__flex-box {
  margin: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sort__toggle {
  margin-left: auto;
}
</style>
