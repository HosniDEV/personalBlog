<template>
  <div class="px-4 lg:px-0">
    <aside class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <CardLanding></CardLanding>
      <CardLanding></CardLanding>
      <CardLanding></CardLanding>
    </aside>

    <article class="grid grid-cols-3 my-8 gap-8">
      <div class="col-span-3 lg:col-span-2">
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
      <div class="col-span-3 lg:col-span-1">
        <PopularArticleApp />
      </div>
    </article>
  </div>
</template>

<script setup>
import CardLanding from "@/components/blogComponents/CardLanding.vue";
import CardHome from "@/components/blogComponents/CardHome.vue";
import PopularArticleApp from "@/components/blogComponents/PopularArticleApp.vue";
</script>
<style></style>
