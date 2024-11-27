<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Reactive state for tracking scroll direction
const isNavHidden = ref(false);

let lastScrollY = 0;

// Function to handle scroll
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Hide navbar if scrolling down, show if scrolling up
  if (currentScrollY > lastScrollY) {
    isNavHidden.value = true; // Scrolling down
  } else {
    isNavHidden.value = false; // Scrolling up
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
};

onMounted(() => {
  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  // Clean up the event listener
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'text-white uppercase fixed w-full bottom-0 flex flex-col justify-center items-center text-xl z-10',
      { 'hidden-nav': isNavHidden }
    ]"
  >
    <div class="w-[1280px] h-[100px] flex items-center p-4 justify-between">
      <div>
        <img src="../../siteLogo.png" alt="Site Logo" class="h-[70px] pt-2" />
      </div>
      <div>
        <ul class="flex gap-10 font-bold text-xl">
          <li><a href="/about">About</a></li>
          <li><a href="/about">Schedule</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <button
          class="button font-semibold px-5 py-1 uppercase rounded-full text-xl"
        >
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #004aad;
  transition: transform 0.3s ease;
}

/* Class to hide the nav bar */
.hidden-nav {
  transform: translateY(100%);
}

.button {
  background-color: #ed5f1e;
}
</style>
