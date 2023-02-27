<template>
  <section class="sort">
    <div class="content-wrapper">
      <div class="sort__flex-box">
        <ParagraphMedium
          v-show="props.moviesCount"
          style="font-weight: 700; color: #ffffff"
        >
          {{ props.moviesCount }} items found
        </ParagraphMedium>

        <CustomToggle toggle-type="search by" :toggle-options="sortByOptions" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import CustomToggle from "./movies/shared/CustomToggle.vue";
interface IProps {
  moviesCount: number;
}
const props = defineProps<IProps>();

const sortByOptions = ["release date", "rating"];
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
</style>
