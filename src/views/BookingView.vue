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
  <div class="w-[1280px] self-center mx-auto min-h-[90vh] mb-5 pt-10">
    <h1 class="uppercase w-full text-5xl">Book an appointment</h1>
    <p class="text-xl">
      <span class="text-orange-500">STE-MED </span> provides an integrated range
      of solutions to enhance healthcare efficiency and optimize patient care.
    </p>
    <div class="card lg:card-side bg-[#73adfb] shadow-xl text-black mt-4">
      <figure class="w-[50%]">
        <img :src="`/services1.png`" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Fill up the form to book an appointment:</h2>
        <label class="input input-bordered flex items-center gap-2 bg-slate-50">
          Full Name
          <input
            type="text"
            class="grow bg-slate-50"
            placeholder="Juan Dela Cruz"
          />
        </label>
        <label class="input input-bordered flex items-center gap-2 bg-slate-50">
          Address:
          <input
            type="text"
            class="grow bg-slate-50"
            placeholder="123, Bayang Sinilangan St., Pinas City"
          />
        </label>
        <label class="input input-bordered flex items-center gap-2 bg-slate-50">
          Age:
          <input type="text" class="grow bg-slate-50" placeholder="25" />
        </label>
        <label class="input input-bordered flex items-center gap-2 bg-slate-50">
          Phone No.
          <input
            type="text"
            class="grow bg-slate-50"
            placeholder="0998 765 4321"
          />
        </label>
        <label class="label">
          <span class="label-text text-black text-lg">Select Date</span>
        </label>
        <input
          type="date"
          class="input input-bordered w-full max-w-xs bg-slate-50"
        />
        <label class="label">
          <span class="label-text text-black text-lg">Select Time</span>
        </label>
        <input
          type="time"
          class="input input-bordered w-full max-w-xs bg-slate-50 text-black"
        />

        <div class="card-actions justify-end">
          <button class="btn btn-primary bg-blue-950 text-white">
            Submit Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
