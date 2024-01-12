<template>
  <section class="space-y-2 sm:space-y-6">
    <div class="relative overflow-hidden">
      <img
        src="https://picsum.photos/400/300?random=3"
        class="w-full object-cover h-full aspect-video"
      />
      <div
        class="relative sm:absolute bg-white bottom-0 inset-x-0 sm:mx-6 sm:p-6 flex flex-col sm:items-center sm:space-y-3 mt-3 sm:mt-0"
      >
        <div class="flex items-center space-x-2">
          <div class="flex space-x-2 items-center">
            <UserIcon class="size-4" />
            <span class="font-lora text-sm text-primaryColor"
              >Hosni Abdellah</span
            >
          </div>
          <div class="flex space-x-2 items-center">
            <ClockIcon class="size-4" />
            <span class="font-lora text-sm text-primaryColor">12-08-1997</span>
          </div>
          <div class="flex space-x-2 items-center">
            <ChatBubbleOvalLeftIcon class="size-4" />
            <span class="font-lora text-sm text-primaryColor">1</span>
          </div>
        </div>
        <h1>why you should have to visit morocco</h1>
      </div>
    </div>
    <div class="py-4 space-y-3">
      <p class="text-sm font-thin font-lora text-primaryColor">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti
        officia nesciunt, veniam earum voluptas eum fuga quas sed, officiis
        error aliquid molestiae quibusdam modi molestias sint aspernatur,
        inventore at.
      </p>
      <ButtonApp></ButtonApp>
    </div>
  </section>
</template>

<script setup>
import {
  ClockIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/vue/24/outline";
import ButtonApp from "@/components/blogComponents/ButtonApp.vue";
</script>

<style lang="scss" scoped></style>
