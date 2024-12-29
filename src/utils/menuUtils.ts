export const menuUtils = {
  menuItem: [
    {
      title: "문제 풀기",
      value: "test",
      icon: "mdi-pencil-box-outline",
      path: "/test"
    },
    {
      title: "오답노트",
      value: "solve-problems",
      icon: "mdi-notebook-outline",
      path: "/solve-problems"
    },
    {
      title: "암기노트",
      value: "memory-notes",
      icon: "mdi-brain",
      path: "/memory-notes",
    },
    // {
    //   title: "즐겨찾기",
    //   value: "favorites",
    //   icon: "mdi-star",
    //   path: "/favorites",
    // },
    {
      title: "마이페이지",
      path: "/user",
      value: "user",
      icon: "mdi-account",
    },
    //관리자 권한시에만 나올 것.
    {
      title: "유저관리",
      path: "/user-management",
      value: "user-management",
      icon: "mdi-account-group",
    },
  ],
};
