<template>
  <slot v-if="state.status === 'loaded'" name="image" />
  <slot v-else-if="state.status === 'failed'" name="error" />
  <slot v-else-if="state.status === 'loading'" name="preloader" />
</template>

<script lang="ts" setup>
import { reactive, useSlots, onUpdated, onMounted } from "vue";

const slots = useSlots();

enum ELoadingStatus {
  LOADED = "loaded",
  FAILED = "failed",
  LOADING = "loading",
}

interface IState {
  status: ELoadingStatus | null;
  imageSrc: string;
  image: HTMLImageElement | null;
}

const state = reactive<IState>({
  status: null,
  imageSrc: "",
  image: null,
});

onMounted(() => {
  state.imageSrc = slots?.image()[0].props?.src;
  state.status = ELoadingStatus.LOADING;
  createLoader();
  return;
});

onUpdated(() => {
  if (state.status === ELoadingStatus.LOADING && !state.image) {
    createLoader();
    return;
  }
});

const createLoader = () => {
  destroyLoader();
  state.image = new Image();
  state.image.onload = handleLoad;
  state.image.onerror = handleError;
  state.image.src = state.imageSrc;
};

const destroyLoader = () => {
  if (state.image) {
    state.image.onload = null;
    state.image.onerror = null;
    state.image = null;
  }
};

const handleLoad = () => {
  destroyLoader();
  state.status = ELoadingStatus.LOADED;
};

const handleError = () => {
  destroyLoader();
  state.status = ELoadingStatus.FAILED;
};
</script>
