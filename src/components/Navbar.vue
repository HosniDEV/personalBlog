<template>
  <nav class="md:space-y-4 py-6 px-3 md:px-0 shadow md:shadow-none mb-10">
    <!-- burger icon -->

    <!-- logo -->
    <div class="flex justify-start md:justify-center space-x-4 md:space-x-0">
      <Bars3Icon
        class="md:hidden size-5 cursor-pointer"
        @click="isShow = true"
      />
      <router-link :to="{ name: 'home' }" class="md:text-3xl"
        >ABDELLAH HOSNI</router-link
      >
    </div>
    <!-- links -->
    <div class="hidden md:block">
      <ul
        class="flex justify-center items-center border-t-8 border-t-primaryColor border-b border-b-hoverColor"
      >
        <RouterLink
          :to="{ name: 'home' }"
          active-class="bg-primaryColor text-white"
          class="uppercase hover:bg-primaryColor hover:text-white transition-colors ease p-3 text-sm font-light"
        >
          home
        </RouterLink>
        <li
          class="uppercase hover:bg-primaryColor hover:text-white transition-colors ease p-3 text-sm font-light"
        >
          WORLD
        </li>
        <li
          class="uppercase hover:bg-primaryColor hover:text-white transition-colors ease p-3 text-sm font-light"
        >
          WORLD
        </li>
        <li
          class="uppercase hover:bg-primaryColor hover:text-white transition-colors ease p-3 text-sm font-light"
        >
          WORLD
        </li>
      </ul>
    </div>
  </nav>
  <!-- responsive nav -->
  <Transition name="show">
    <!-- <Teleport to="body"> -->
    <div
      class="md:hidden absolute bg-hoverColor w-full min-h-full top-0 z-10"
      v-if="isShow"
    >
      <ul class="p-10 divide-y divide-gray-100/20">
        <div class="flex justify-end mb-3">
          <XMarkIcon
            @click="isShow = false"
            class="size-10 text-white cursor-pointer hover:text-red-600"
          />
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="capitalize tracking-wider hover:text-gray-300 text-white duration-100 transition-colors ease p-4 text-sm font-light block"
        >
          home
        </router-link>
        <li
          class="capitalize tracking-wider hover:text-gray-300 text-white duration-100 transition-colors ease p-4 text-sm font-light"
        >
          World
        </li>
        <li
          class="capitalize tracking-wider hover:text-gray-300 text-white duration-100 transition-colors ease p-4 text-sm font-light"
        >
          World
        </li>
        <li
          class="capitalize tracking-wider hover:text-gray-300 text-white duration-100 transition-colors ease p-4 text-sm font-light"
        >
          World
        </li>
      </ul>
    </div>
    <!-- </Teleport> -->
  </Transition>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const isShow = ref(false);
</script>

<style scoped>
.show-enter-from {
  opacity: 0;
  left: -1000px;
}
.show-enter-to {
  opacity: 1;
  left: 0;
}
.show-enter-active,
.show-leave-active {
  transition: all 2s ease;
}
.show-leave-from {
  opacity: 1;
  left: 0;
}
.show-leave-to {
  opacity: 0;
  left: -1000px;
}
</style>
