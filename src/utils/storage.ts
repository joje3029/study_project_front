export const storage = {
  get: (key: any) => {
    return localStorage.getItem(key);
  },
  set: (key: any, value: any) => {
    localStorage.setItem(key, value);
  },
  getToken: () => {
    const authString = localStorage.getItem("sdp-auth");
    if (authString !== null) {
      const auth = JSON.parse(authString);
      return auth.token;
    }
    return "";
  },
  // getUserId: () => {
  //   const authString = localStorage.getItem("sdp-auth");
  //   if (authString !== null) {
  //     const auth = JSON.parse(authString);
  //     return auth.userId;
  //   }
  //   return "";
  // },
  // getUserNm: () => {
  //   const authString = localStorage.getItem("sdp-auth");
  //   if (authString !== null) {
  //     const auth = JSON.parse(authString);
  //     return auth.userNm;
  //   }
  //   return "";
  // },
  // getUserAuthCd: () => {
  //   const authString = localStorage.getItem("sdp-auth");
  //   if (authString !== null) {
  //     const auth = JSON.parse(authString);
  //     return auth.auth;
  //   }
  //   return "";
  // },
  getAuth: () => {
    const authString = localStorage.getItem("sdp-auth");
    if (authString !== null) {
      return JSON.parse(authString);
    }
    return null;
  },
  setAuth: (value: any) => {
    localStorage.setItem("sdp-auth", JSON.stringify(value));
  },
  clearAuth: () => {
    localStorage.removeItem("sdp-auth");
  },
};
