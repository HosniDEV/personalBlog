<template>
  <div class="flex relative">
    <div
      class="size-8 bg-primaryColor ring ring-white absolute -top-2 -left-2 text-white text-center text-normal rounded-full grid place-content-center"
    >
      1
    </div>
    <div class="h-[100px] flex-1 mr-3">
      <img
        src="https://picsum.photos/200/300?random=2"
        alt=""
        class="h-full w-full object-cover bg-red-100"
      />
    </div>
    <div class="flex-1">
      <h1>10 Reasons to Visit Lyon, France</h1>
      <div class="flex space-x-2 items-center">
        <ClockIcon class="size-4" />
        <span class="font-lora text-sm text-primaryColor">12-08-1997</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";
</script>

<style lang="scss" scoped></style>
