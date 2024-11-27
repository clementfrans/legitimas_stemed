<script setup></script>
<template>
  <div class="flex justify-center py-10">
    <div
      class="hero-2 h-[80vh] w-[80vw] p-10 rounded-3xl flex items-start justify-center flex-col"
    >
      <h2 class="uppercase text-white text-3xl">
        Driven by Passion, Built for Precision:
      </h2>
      <h1 class="text-5xl text-white py-5">The Future of Healthcare Data</h1>
      <a class="flex gap-3" href="#">
        <button
          class="button font-semibold px-5 py-1 uppercase rounded-full text-xl text-white h-[40px]"
        >
          Continue
        </button>
        <img src="/arrowButton.png" alt="" srcset="" class="h-[40px]" />
      </a>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Norwester;
}

.hero-2 {
  background: url("./hero2bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.button {
  background-color: #ed5f1e;
}
</style>
