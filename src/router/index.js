import { createRouter, createWebHistory } from "vue-router";
import CategoryView from "../views/CatgegoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/article/:slug",
      name: "article",
      component: () => import("@/views/DetailView.vue"),
    },
  ],
});

export default router;
