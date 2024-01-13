<template>
  <div class="space-y-2">
    <img
      loading="lazy"
      :src="article.image"
      :alt="article.title"
      class="aspect-video object-cover"
    />
    <h1 class="text-sm font-lora font-light">
      {{ article.title }}
    </h1>
    <div class="flex space-x-2 justify-start">
      <ClockIcon class="size-4" />
      <span class="font-lora text-sm text-primaryColor">{{
        postStore.getSimpleDate(article.created_at)
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";
import { usePostStore } from "@/stores/postStore/post";
const postStore = usePostStore();
defineProps({
  article: Object,
});
</script>

<style lang="scss" scoped></style>
