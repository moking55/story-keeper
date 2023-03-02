import { onAuthStateChanged } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";
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
      path: "/story/create",
      name: "create-story",
      component: () => import("@/views/writerZone/createStory.vue"),
      meta: {
        activeBanner: true,
        requireAuth: false,
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
        activeBanner: true,
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
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      useFirebaseAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/signin");
    }
  }
  next();
});
export default router;
