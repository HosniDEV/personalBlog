<template>
  <button
    class="px-5 py-2 bg-primaryColor hover:bg-hoverColor transition-colors duration-150 ease-in-out text-white capitalize"
  >
    {{ val }}
    <ChevronDoubleRightIcon class="size-4 inline"></ChevronDoubleRightIcon>
  </button>
</template>

<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
defineProps({
  val: {
    type: String,
    default: "read more",
  },
});
</script>

<style lang="scss" scoped></style>
