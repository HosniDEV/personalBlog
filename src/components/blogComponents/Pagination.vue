<template>
  <ul class="flex space-x-3 items-center justify-end">
    <li
      class="px-3 py-1 text-white bg-hoverColor hover:bg-primaryColor"
      :class="{
        'cursor-not-allowed opacity-50': postStore.current_page <= 1,
      }"
    >
      <span
        @click="
          postStore.current_page > 1
            ? postStore.paginate(postStore.current_page - 1)
            : ''
        "
        :disabled="postStore.current_page <= 1"
      >
        previous
      </span>
    </li>
    <li class="px-3 py-1 text-white bg-hoverColor">
      {{ postStore.current_page + "/" + postStore.last_page }}
    </li>
    <li
      class="px-3 py-1 text-white bg-hoverColor hover:bg-primaryColor"
      :class="{
        'cursor-not-allowed opacity-50':
          postStore.current_page >= postStore.last_page,
      }"
    >
      <span
        @click="
          postStore.current_page < postStore.last_page
            ? postStore.paginate(postStore.current_page + 1)
            : ''
        "
      >
        next
      </span>
    </li>
  </ul>
</template>

<script setup>
import { usePostStore } from "@/stores/postStore/post";
const postStore = usePostStore();
</script>

<style lang="scss" scoped></style>
