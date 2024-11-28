<script>
export default {
  data() {
    return {
      items: [
        {
          image: "services1.png",
          title: "Patient Data Management",
          description:
            "Efficiently organize and manage patient information, making recordkeeping streamlined and accessible for healthcare providers."
        },
        {
          image: "services2.png",
          title: "Secure Health Storage",
          description:
            "Protect patient privacy with our secure, compliant storage solutions, designed to keep health information safe and confidential."
        },
        {
          image: "services3.png",
          title: "Instant Record Access",
          description:
            "Access patient records in real time, ensuring you have vital information at your fingertips anytime, anywhere."
        },
        {
          image: "services4.png",
          title: "Data Analytics Insights",
          description:
            "Leverage data-driven insights to support clinical decision-making and improve patient care outcomes."
        },
        {
          image: "services5.png",
          title: "Digital Integration",
          description:
            "Seamlessly connect healthcare processes within a single, unified digital platform to enhance workflow and efficiency."
        },
        {
          image: "services6.png",
          title: "Workflow Scheduling",
          description:
            "Streamline appointment scheduling and task management, optimizing daily workflows for healthcare providers."
        },
        {
          image: "services7.png",
          title: "Medical Dictionary",
          description:
            "Access a comprehensive medical dictionary for quick reference, ensuring clarity and precision in every interaction."
        }
      ]
    };
  }
};
</script>
<template>
  <div class="w-[1280px] self-center mx-auto min-h-[90vh] mb-5">
    <h1 class="uppercase w-full text-5xl">Services</h1>
    <p class="text-xl">
      <span class="text-orange-500">STE-MED </span>provides an integrated range
      of solutions to enhance healthcare efficiency and optimize patient care.
    </p>
    <div
      class="grid grid-cols-3 gap-y-10 gap-x-5 mt-5 justify-between items-start"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'card flex flex-col gap-3 p-4': true,
          'col-start-2': index === 6
        }"
      >
        <img
          :src="`/${item.image}`"
          :alt="item.title"
          class="h-[200px] w-full object-cover rounded-3xl"
        />
        <h1 class="uppercase w-[70%] text-4xl text-blue-800">
          {{ item.title }}
        </h1>
        <p class="leading-5 text-xl">{{ item.description }}</p>
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
