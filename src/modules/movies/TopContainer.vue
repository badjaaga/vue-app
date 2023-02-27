<template>
  <div class="search">
    <HeadingLarge>Find your movie</HeadingLarge>
    <div class="search__input">
      <CustomInput placeholder="Search movie" />
      <PrimaryButton>Search</PrimaryButton>
    </div>
    <div class="search__options">
      <CustomToggle toggle-type="search by" :toggle-options="searchByOptions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomToggle from "./shared/CustomToggle.vue";
import HeadingLarge from "./shared/HeadingLarge.vue";
import CustomInput from "./shared/CustomInput.vue";
import PrimaryButton from "./shared/PrimaryButton.vue";

const searchByOptions = ["title", "genre"];
</script>

<style scoped>
.search {
  margin: 60px 60px 0;
}

.search__input {
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.search__input input {
  flex: 1;
}

.search__options {
  margin-top: 25px;
}
</style>
