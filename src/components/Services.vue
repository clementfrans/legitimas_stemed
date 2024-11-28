<script></script>
<template>
  <div class="w-[1280px] self-center mx-auto min-h-[90vh]">
    <h1 class="uppercase w-full text-5xl">Services</h1>
    <div
      class="grid grid-cols-3 gap-y-10 gap-x-5 mt-5 justify-center items-center"
    >
      <div class="card bg-orange-300 h-[200px]">Card</div>
      <div class="card bg-orange-300 h-[200px]">Card</div>
      <div class="card bg-orange-300 h-[200px]">Card</div>
      <div class="card bg-orange-300 h-[200px]">Card</div>
      <div class="card bg-orange-300 h-[200px]">Card</div>
      <div class="card bg-orange-300 h-[200px]">Card</div>
      <!-- Center the 7th card -->
      <div
        class="card bg-orange-300 h-[200px] col-span-1 col-start-2 text-center"
      >
        Card
      </div>
    </div>
  </div>
</template>
<style>
h1 {
  font-family: Norwester;
}
.card {
  width: 100%;
}
</style>
