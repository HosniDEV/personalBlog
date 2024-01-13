<template>
  <div class="aspect-video relative">
    <img
      loading="lazy"
      :src="article.image"
      alt=""
      class="h-full w-full object-cover bg-red-100"
    />
    <div class="absolute inset-0 p-6 flex flex-col justify-between items-start">
      <h1
        class="bg-primaryColor px-3 py-1 text-sm text-white hover:bg-hoverColor inline-block rounded-md"
      >
        {{ article.category.name }}
      </h1>
      <div class="text-white text-sm space-y-2">
        <time datetime="" class="text-xs">{{
          postStore.getSimpleDate(article.created_at)
        }}</time>
        <h1>{{ article.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/postStore/post";
const postStore = usePostStore();
defineProps({
  article: Object,
});
</script>

<style lang="scss" scoped></style>
