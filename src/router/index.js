import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        activeBanner: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: {
        activeBanner: true,
      },
    },
    {
      path: "/read/:storyId",
      name: "story",
      component: () => import("@/views/StoryView.vue"),
      meta: {
        activeBanner: false,
      },
    },

    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignupView.vue"),
      meta: {
        activeBanner: false,
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("@/views/SigninView.vue"),
      meta: {
        activeBanner: false,
      },
    },
    {
      path: "/philosophy",
      name: "philosophy",
      component: () => import("@/views/PhilosophyView.vue"),
      meta: {
        activeBanner: false,
      },
    },

    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/404.vue"),
      meta: {
        activeBanner: false,
      },
    },
  ],
});

export default router;
