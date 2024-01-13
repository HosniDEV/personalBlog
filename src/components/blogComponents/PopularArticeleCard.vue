<template>
  <div class="flex relative">
    <div
      class="size-8 bg-primaryColor ring ring-white absolute -top-2 -left-2 text-white text-center text-normal rounded-full grid place-content-center"
    >
      {{ index }}
    </div>
    <div class="h-[100px] flex-1 mr-3">
      <router-link :to="{ name: 'home' }">
        <img
          loading="lazy"
          :src="article.image"
          alt=""
          class="h-full w-full object-cover bg-red-100"
        />
      </router-link>
    </div>
    <div class="flex-1">
      <h1 class="line-clamp-3">
        <router-link :to="{ name: 'article', params: { slug: article.slug } }">
          {{ article.title }}
        </router-link>
      </h1>
      <div class="flex space-x-2 items-center">
        <ClockIcon class="size-4" />
        <span class="font-lora text-sm text-primaryColor">{{
          postStore.getSimpleDate(article.created_at)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
import { usePostStore } from "@/stores/postStore/post";
const postStore = usePostStore();
defineProps({
  article: {
    type: Object,
  },
  index: Number,
});
</script>

<style lang="scss" scoped></style>
