<template>
  <input
    type="text"
    @input="updateValue($event.target.value)"
    @update:value="emit('update:value', $event)"
  />
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const internalValue = ref(instance?.props.value);

const updateValue = (newValue: string) => {
  internalValue.value = newValue;
  instance?.emit("update:value", newValue);
};
</script>

<style scoped>
input {
  background: rgba(50, 50, 50, 0.6);
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
