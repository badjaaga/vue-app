<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
button {
  border: none;
  border-radius: 4px;
  background-color: #f65261;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;
  padding: 18px 74px;
  text-transform: uppercase;
}
</style>
