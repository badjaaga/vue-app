<template>
  <header>
    <div class="content-wrapper">
      <img src="@/assets/logo.svg" alt="logo" />

      <div class="search">
        <HeadingLarge>Find your movie</HeadingLarge>
        <CustomInput placeholder="Search movie" />
        <PrimaryButton>Search</PrimaryButton>
        <div>
          <CustomToggle
            toggle-type="search by"
            :toggle-options="genreOptions"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import CustomToggle from "./shared/CustomToggle.vue";
import CustomInput from "./shared/CustomInput.vue";
import PrimaryButton from "./shared/PrimaryButton.vue";
import HeadingLarge from "./shared/HeadingLarge.vue";

const genreOptions = ["test1", "test2", "test3"];
</script>

<style lang="scss">
@import "normalize-scss/sass/normalize/import-now";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
button:active {
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px 0;
}
header {
  padding: 20px 60px 150px 60px;
  background-image: url("@/assets/header.png");
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
}
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.search {
  margin: 0 60px;
}
</style>
