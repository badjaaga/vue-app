<template>
  <div class="not-found">
    <HeadingLarge>Ooops...Page Not Found</HeadingLarge>

    <ParagraphMedium
      style="color: #232323; margin-top: 30px; margin-bottom: 50px"
      >We're sorry, but the page you requested could not be
      found.</ParagraphMedium
    >
    <PrimaryButton
      ><router-link :to="{ name: 'home' }"
        >Return to Home Page</router-link
      ></PrimaryButton
    >
  </div>
</template>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #979797;
}

a {
  text-decoration: none;
  color: #ffffff;
}
</style>
<script>
import HeadingLarge from "@/modules/movies/shared/HeadingLarge";
import ParagraphMedium from "@/modules/movies/shared/ParagraphMedium";
import PrimaryButton from "@/modules/movies/shared/PrimaryButton";
export default {
  components: { PrimaryButton, ParagraphMedium, HeadingLarge },
};
</script>
