import { createRouter, createWebHistory } from "vue-router";
import { storage } from "@/utils/storage";
import { commonStore } from "@/stores/app";

const rootPath = import.meta.env.VITE_ROOT_PATH;

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
        
        children: [
          {
            path: "",
            name: "test-main",
            meta: {
              title: "문제 풀기",
              requiresAuth: false,
            },
            component: () => import("@/pages/TestView.vue"),
          },
          {
            path: "solve",
            name: "test-solve",
            meta: {
              title: "문제",
              requiresAuth: false,
            },
            component: () => import("@/pages/test/TestSolveView.vue")
          },
          {
            path: "create",
            name: "test-create", 
            meta: {
              title: "문제 등록",
              requiresAuth: false,
            },
            component: () => import("@/pages/test/TestCreateView.vue")
          }
        ]
      },
      {
        name: "solve-problems",
        path: "solve-problems",
        component: () => import("@/pages/SolveProblemsView.vue"),
      },
      {
        name: "memory-notes",
        path: "memory-notes",
        children: [ 
          {
            path: "",
            name: "memory-notes-main",
            meta: {
              title: "암기노트",
              requiresAuth: false,
            },
            component: () => import("@/pages/MemoryNotesView.vue"),
          },
          {
            path: "add",
            name: "memory-notes-add",
            meta: {
              title: "암기 등록",
              requiresAuth: false,
            },
            component: () => import("@/pages/memory/MemoryNotesAddView.vue"),
          },
          {
            path: "view-note",
            name: "memory-notes-view-note",
            meta: {
              title: "암기 할 내용",
              requiresAuth: false,
            },
            component: () => import("@/pages/memory/MemoryNotesViewNote.vue"),
          },
        ]
      },
      {
        name: "user",
        path: "user",
        meta: {
          title: "개인정보",
          requiresAuth: false,
        },
        component: () => import("@/pages/UserView.vue"),
      },
      {
        name: "user-management",
        path: "user-management",
        component: () => import("@/pages/UserManagementView.vue"),
      },
    ],
  },
  {
    name: "signin",
    path: "/signin",
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
