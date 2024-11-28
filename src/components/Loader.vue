<script setup></script>
<template>
  <transition name="fade">
    <div
      class="h-[100vh] w-[100vw] z-20 fixed bg-white flex justify-center items-center pb-[100px]"
    >
      <img
        src="@/assets/images/logoBlue.png"
        alt="Site Logo"
        class="h-[500px]"
      />
      <img
        src="@/assets/images/logoOrangeAlpha.png"
        alt="Site Logo"
        class="h-[300px ml-[-150px] pt-[300px]"
      />
    </div>
  </transition>
</template>
<style>
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
