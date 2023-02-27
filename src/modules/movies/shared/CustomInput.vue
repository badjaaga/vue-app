<template>
  <input type="text" />
</template>

<script lang="ts" setup></script>

<style scoped>
input {
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  outline: none;
  border: none;
  padding: 19px 17px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}
input::placeholder {
  opacity: 0.6;
}
</style>
