<template>
  <div class="img-container">
    <img class="rounded-full" height="300" width="300" src="/img/nico.jpeg" alt="Mica" />
  </div>
  <slot />
</template>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
}
.rounded-full {
  border-radius: 200px;
}
</style>
