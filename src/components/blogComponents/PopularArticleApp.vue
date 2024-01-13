<template>
  <section class="space-y-6">
    <Card>
      <div class="bg-hoverColor text-white p-2">Follow me</div>
    </Card>
    <Card>
      <div class="space-y-3">
        <div class="bg-hoverColor text-white p-2">Popular Articles</div>
        <PopularArticeleCard
          v-for="(article, index) in postStore.polularArticles"
          :key="index"
          :article="article"
          :index="index + 1"
        ></PopularArticeleCard>
      </div>
    </Card>
  </section>
</template>

<script setup>
import Card from "./Card.vue";
import PopularArticeleCard from "./PopularArticeleCard.vue";
import { usePostStore } from "@/stores/postStore/post.js";
import { onMounted } from "vue";

const postStore = usePostStore();

onMounted(async () => await postStore.getPopularArticles());
</script>

<style lang="scss" scoped></style>
