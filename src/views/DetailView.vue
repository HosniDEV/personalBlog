<template>
  <!-- <div v-if="postStore.isLoading">is loading ...</div> -->
  <div class="px-4 lg:px-0">
    <article class="grid grid-cols-3 my-8 gap-8">
      <div class="col-span-3 lg:col-span-2 space-y-8">
        <Card class="space-y-4">
          <h1
            v-if="postStore.article"
            class="bg-primaryColor px-3 py-1 text-sm text-white hover:bg-hoverColor inline-block rounded-md"
          >
            <!-- {{ postStore.article.category.name }} -->
          </h1>
          <aside class="flex justify-between items-center">
            <div class="flex space-x-2 items-center">
              <ClockIcon class="size-4" />
              <span class="font-lora text-sm text-primaryColor">{{
                postStore.getSimpleDate(postStore.article.created_at)
              }}</span>
            </div>
            <div class="flex space-x-2 items-center">
              <ChatBubbleOvalLeftIcon class="size-4" />
              <span class="font-lora text-sm text-primaryColor">1</span>
            </div>
          </aside>
          <img
            :src="postStore.article.image"
            :alt="postStore.article.title"
            class="aspect-video w-full h-full object-cover"
          />
          <p class="text-sm font-thin font-lora text-primaryColor indent-8">
            {{ postStore.article.content }}
          </p>
        </Card>
        <!-- start comment -->
        <Card>
          <form action="">
            <div class="bg-hoverColor text-white p-2">Leave a comment</div>
            <textarea
              placeholder="leave a comment"
              name=""
              id=""
              rows="4"
              class="w-full border border-hoverColor focus:outline-none px-3 py-2 placeholder:text-sm placeholder:text-gray-300 text-sm"
            ></textarea>
            <button
              class="px-5 py-2 bg-primaryColor hover:bg-hoverColor transition-colors duration-150 ease-in-out text-white capitalize"
            >
              post Comment
            </button>
          </form></Card
        >
        <!-- end comment -->
        <!-- start related articles -->
        <Card>
          <div class="bg-hoverColor text-white p-2">Related Articles</div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3 sm:[&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1"
          >
            <RelatedCard
              v-for="article in postStore.randomCategories"
              :key="article.id"
              :article="article"
            ></RelatedCard>
          </div>
        </Card>
        <!--end of related articles -->
      </div>
      <div class="col-span-3 lg:col-span-1">
        <PopularArticleApp />
      </div>
    </article>
  </div>
</template>

<script setup>
import Card from "@/components/blogComponents/Card.vue";
import { ClockIcon, ChatBubbleOvalLeftIcon } from "@heroicons/vue/24/outline";
import PopularArticleApp from "@/components/blogComponents/PopularArticleApp.vue";
import RelatedCard from "@/components/blogComponents/RelatedCard.vue";
import { usePostStore } from "@/stores/postStore/post";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const postStore = usePostStore();
// get all articles
onMounted(async () => await postStore.getArticle(route.params.slug));
onMounted(async () => await postStore.getPopularArticles());
</script>
<style></style>
