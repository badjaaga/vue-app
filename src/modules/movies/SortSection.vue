<template>
  <section class="sort">
    <div class="content-wrapper">
      <div class="sort__flex-box">
        <slot />
        <CustomToggle
          class="sort__toggle"
          :selected-option="sortByOption"
          :toggle-options="sortByOptions"
          @toggle-option="handleToggle"
          >Sort by</CustomToggle
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CustomToggle from "./shared/CustomToggle.vue";
import { useStore } from "vuex";
import { SortByOption } from "@/modules/movies/types";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const sortByOptions = ["release date", "rating"];
const sortByOption = ref<SortByOption>("release date");

onBeforeMount(() => {
  const { sortBy } = route.query;

  if (sortBy && sortBy !== store.getters["movies/getSortByOption"]) {
    store.dispatch("movies/setSortByOption", sortBy);
    sortByOption.value = sortBy as SortByOption;
  }
});

const handleToggle = (value: SortByOption) => {
  store.dispatch("movies/setSortByOption", value);
  sortByOption.value = value;
  router.push({
    query: {
      search: store.getters["movies/getSearchTerm"],
      searchBy: store.getters["movies/getSearchByOption"],
      sortBy: store.getters["movies/getSortByOption"],
    },
  });
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
