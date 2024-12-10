<script setup>
import { ref, onMounted } from "vue";
import Loader from "@/components/Loader.vue";
import Map from "@/components/Map.vue";
import Hero2 from "@/components/Hero2.vue";
import Services from "@/components/Services.vue";

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
  <Loader v-if="showLoader" />
  <div>
    <div class="hero-section h-[calc(100vh_-_100px)] flex justify-center">
      <img
        src="@/assets/images/heroImage.png"
        alt="Hero Image"
        class="max-h-full"
      />
    </div>
    <Hero2 />
    <Map />
    <Services />
    <div class="bg-blue-400 h-[500vh]">
      <h1 class="text-3xl text-center p-5">
        Sections Below this Element are Under Construction
      </h1>
    </div>
  </div>
  ;
</template>
