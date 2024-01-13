<template>
  <div class="border border-hoverColor">
    <div class="p-8 space-y-3">
      <h1 class="text-2xl capitalize font-coustard tracking-wide font-semibold">
        How to Find the Cheapest Flight to Indonesia
      </h1>
      <div class="flex justify-between">
        <div class="flex space-x-2 items-center">
          <ClockIcon class="size-4" />
          <span class="font-lora text-sm text-primaryColor">12-08-1997</span>
        </div>
        <div class="flex space-x-2 items-center">
          <ChatBubbleLeftRightIcon class="size-4" />
          <span class="font-lora text-sm text-primaryColor">12</span>
        </div>
      </div>
    </div>
    <div class="h-[200px] relative group overflow-hidden">
      <img
        loading="lazy"
        src="https://picsum.photos/200/300?random=3"
        class="w-full object-cover h-full"
      />
      <div
        class="bg-black opacity-0 group-hover:opacity-20 scale-50 group-hover:scale-100 inset-0 top-0 left-0 absolute group-hover:block transition-all duration-500 ease-in-out"
      ></div>
    </div>
    <div class="p-8 space-y-3">
      <p class="text-sm font-thin font-lora text-primaryColor">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti
        officia nesciunt, veniam earum voluptas eum fuga quas sed, officiis
        error aliquid molestiae quibusdam modi molestias sint aspernatur,
        inventore at.
      </p>
      <ButtonApp></ButtonApp>
    </div>
  </div>
</template>

<script setup>
import ButtonApp from "./ButtonApp.vue";
import { ClockIcon } from "@heroicons/vue/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/outline";
</script>

<style lang="scss" scoped></style>
