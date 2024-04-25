<template>
  <div class="img-container">
    <img class="rounded-img" height="300" width="230" src="/img/nico.png" alt="Mica" />
  </div>
  <slot />
</template>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
}
.rounded-img {
  border-radius: 20px;
}
</style>
