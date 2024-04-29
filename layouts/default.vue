<template>
  <div class="container">
    <div class="min-h-screen flex flex-col overflow-x-hidden">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: auto;
}
</style>
