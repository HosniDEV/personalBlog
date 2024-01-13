<template>
  <section class="space-y-2 sm:space-y-6">
    <div class="relative overflow-hidden">
      <img
        loading="lazy"
        :src="article.image"
        class="w-full object-cover h-full aspect-video"
      />
      <div
        class="relative sm:absolute bg-white bottom-0 inset-x-0 sm:mx-6 sm:p-6 flex flex-col sm:items-center sm:space-y-3 mt-3 sm:mt-0"
      >
        <div class="flex items-center space-x-2">
          <div class="flex space-x-2 items-center">
            <UserIcon class="size-4" />
            <span class="font-lora text-sm text-primaryColor">{{
              article.user.name
            }}</span>
          </div>
          <div class="flex space-x-2 items-center">
            <ClockIcon class="size-4" />
            <span class="font-lora text-sm text-primaryColor">{{
              postStore.getSimpleDate(article.created_at)
            }}</span>
          </div>
          <div class="flex space-x-2 items-center">
            <ChatBubbleOvalLeftIcon class="size-4" />
            <span class="font-lora text-sm text-primaryColor"></span>
          </div>
        </div>
        <h1>{{ article.title }}</h1>
      </div>
    </div>
    <div class="py-4 space-y-3">
      <p class="text-sm font-thin font-lora text-primaryColor">
        {{ article.content }}
      </p>
    </div>
    <RouterLink :to="{ name: 'article', params: { slug: article.slug } }"
      ><ButtonApp></ButtonApp
    ></RouterLink>
  </section>
</template>

<script setup>
import {
  ClockIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/vue/24/outline";
import ButtonApp from "@/components/blogComponents/ButtonApp.vue";
import { usePostStore } from "@/stores/postStore/post";
import { RouterLink } from "vue-router";
const postStore = usePostStore();
defineProps({
  article: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
