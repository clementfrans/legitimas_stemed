<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div
    class="w-full bg-red-300 text-center text-black opacity-50 text-2xl fixed z-50"
  >
    Website is a Work in Progress. This Element will be removed upon 100%
    completion
  </div>
  <NavBar />
  <RouterView />
</template>

<style scoped>
.hero-section {
  background-color: #004aad;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
