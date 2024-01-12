<template>
  <section class="space-y-6">
    <Card>
      <div class="bg-hoverColor text-white p-2">Follow me</div>
    </Card>
    <Card>
      <div class="space-y-3">
        <div class="bg-hoverColor text-white p-2">Popular Articles</div>
        <PopularArticeleCard></PopularArticeleCard>
        <PopularArticeleCard></PopularArticeleCard>
        <PopularArticeleCard></PopularArticeleCard>
        <PopularArticeleCard></PopularArticeleCard>
      </div>
    </Card>
  </section>
</template>

<script setup>
import Card from "./Card.vue";
import PopularArticeleCard from "./PopularArticeleCard.vue";
</script>

<style lang="scss" scoped></style>
