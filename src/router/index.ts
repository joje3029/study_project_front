import { createRouter, createWebHistory } from "vue-router";
import { storage } from "@/utils/storage";
import { commonStore } from "@/stores/app";

const rootPath = import.meta.env.VITE_ROOT_PATH;
console.log('rootPath:', rootPath);

const routes = [
  {
    path: '/',
    component: () => import("@/layouts/default.vue"),
    redirect: { name: "signin" },
    children: [
      {
        name: "main",
        path: "main",
        meta: {
          title: "dashboard",
          requiresAuth: false,
        },
        component: () => import("@/pages/MainViewView.vue"),
      },
      {
        name: "test",
        path: "test",
        component: () => import("@/pages/TestView.vue"),
      },
      {
        name: "solve-problems",
        path: "solve-problems",
        component: () => import("@/pages/SolveProblemsView.vue"),
      },
      {
        name: "memory-notes",
        path: "memory-notes",
        component: () => import("@/pages/MemoryNotesView.vue"),
      },
      {
        name: "favorites",
        path: "favorites",
        component: () => import("@/pages/FavoritesView.vue"),
      },
      {
        name: "user",
        path: "user",
        component: () => import("@/pages/UserView.vue"),
      },

    ],
  },
  {
    name: "signin",
    path: '/signin',
    meta: {
      title: "로그인",
      requiresAuth: false,
    },
    component: () => import("@/pages/LogInView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROOT_PATH),
  routes,
});

// router.beforeEach((to) => {
//   if (!storage.getAuth() && to.name !== "signin") {
//     return { name: "signin" };
//   } else if (storage.getAuth() && to.name === "signin") {
//     return { name: "main" };
//   }

//   // 권한 검사
//   if (to.meta.requiresAuth) {
//     if (storage.getAuth().auth !== "ADMIN") {
//       const store = commonStore();
//       store.setSnackbarMsg({
//         text: "접근 권한이 없습니다.",
//         result: 500,
//         color: "error",
//       });
//       return { name: "main" };
//     }
//   }

//   return true; // 허용된 경우 라우트 진행
// });

export default router;