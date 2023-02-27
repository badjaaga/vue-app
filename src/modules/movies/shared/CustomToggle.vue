<template>
  <div class="container">
    <p>{{ props.toggleType }}</p>
    <ul class="options">
      <li
        v-for="(option, index) in props.toggleOptions"
        :key="option"
        class="option"
        :class="{ selected: index === selectedIndex }"
        @click="selectOption(index)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

interface IProps {
  toggleType: "search by" | "sort by";
  toggleOptions: string[];
}

const props = defineProps<IProps>();
let selectedIndex = ref(0);
const selectOption = (index: number) => {
  selectedIndex.value = index;
};
</script>

<style scoped>
.container {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.options {
  display: flex;
  margin: 0 0 0 24px;
  padding: 0;
  cursor: pointer;
}

.selected {
  background: #f65261 !important;
}

.option:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.option:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.option {
  background: rgba(50, 50, 50, 0.8);
  list-style-type: none;
  align-self: center;
  padding: 12px 24px;
}
</style>
