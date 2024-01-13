<template>
  <div class="px-4 lg:px-0">
    <aside
      class="grid grid-cols-1 sm:grid-cols-2 sm:[&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1 md:grid-cols-3 gap-3"
    >
      <CardLanding
        v-for="article in postStore.randomCategories"
        :key="article"
        :article="article"
      ></CardLanding>
    </aside>

    <article class="grid grid-cols-3 my-8 gap-8">
      <div class="col-span-3 lg:col-span-2 space-y-4">
        <CardHome
          v-for="article in postStore.articles"
          :key="article"
          :article="article"
        />
        <Pagination></Pagination>
      </div>

      <div class="col-span-3 lg:col-span-1">
        <PopularArticleApp />
      </div>
    </article>
  </div>
</template>

<script setup>
import CardLanding from "@/components/blogComponents/CardLanding.vue";
import Pagination from "@/components/blogComponents/Pagination.vue";
import CardHome from "@/components/blogComponents/CardHome.vue";
import PopularArticleApp from "@/components/blogComponents/PopularArticleApp.vue";
import { usePostStore } from "@/stores/postStore/post";
import { onMounted } from "vue";
const postStore = usePostStore();
// get all articles
onMounted(async () => await postStore.getArticles());
onMounted(async () => await postStore.getUiqueArticleCategory());
</script>
<style></style>
