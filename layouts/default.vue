<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  max-width: 480px;
  margin: auto;
}
</style>
