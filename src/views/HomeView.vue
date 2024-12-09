<script>
import Loader from "@/components/Loader.vue";
import NavBar from "@/components/NavBar.vue";
import Map from "@/components/Map.vue";
import Hero2 from "@/components/Hero2.vue";
import Services from "@/components/Services.vue";
</script>
<template>
  <!-- <Loader v-if="showLoader" /> -->
  <div>
    <NavBar />
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
;
