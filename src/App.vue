<script setup>
import { ref, onMounted } from "vue";

// Manage loader visibility state
const showLoader = ref(false);
onMounted(() => {
  const today = new Date().toISOString().split("T")[0]; // Get current date (YYYY-MM-DD)

  // Check localStorage for the last visit date
  const lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit !== today) {
    // First visit of the day
    showLoader.value = true;
    localStorage.setItem("lastVisit", today);

    // Hide loader after 3 seconds
    setTimeout(() => {
      showLoader.value = false;
    }, 3000);
  }
});
</script>

<template>
  <div
    class="w-full bg-red-300 text-center text-black opacity-50 text-2xl fixed z-50"
  >
    Website is a Work in Progress. This Element will be removed upon 100%
    completion
  </div>
  <transition name="fade">
    <RouterView />
  </transition>
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
