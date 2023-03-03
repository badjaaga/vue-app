<template>
  <div class="loading">
    <div />
    <div />
    <div />
  </div>
</template>

<script></script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  height: 100%;
}

.loading div {
  align-self: center;
  width: 1rem;
  height: 1rem;
  margin: 2rem 0.3rem;
  background: #f65261;
  border-radius: 50%;
  animation: 0.9s bounce infinite alternate;
}

.loading div:nth-child(2) {
  animation-delay: 0.3s;
}

.loading div:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
