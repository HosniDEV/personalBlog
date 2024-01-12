<script setup>
import CardHeader from "@/components/blogComponents/CardHeader.vue";
import CardMain from "@/components/blogComponents/CardMain.vue";
// import Card from "@/components/blogComponents/Card.vue";
import ButtonApp from "@/components/blogComponents/ButtonApp.vue";
import PopularArticleApp from "@/components/blogComponents/PopularArticleApp.vue";
</script>

<template>
  <article class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <section class="lg:col-span-2 space-y-6">
      <CardHeader></CardHeader>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6"
      >
        <CardMain></CardMain>
        <CardMain></CardMain>
        <CardMain></CardMain>
        <CardMain></CardMain>
        <ButtonApp
          class="sm:col-span-2 md:col-span-3 lg:col-span-2 py-3 bg-transparent text-black border border-hoverColor hover:bg-transparent"
          val="load more"
        ></ButtonApp>
      </div>
    </section>
    <PopularArticleApp />
  </article>
</template>
