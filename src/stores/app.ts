// Utilities
import { defineStore } from "pinia";

export const commonStore = defineStore("common", () => {
  const snackbarMsg = ref({ text: "", color: "", result: 200 });

  const setSnackbarMsg = (data: {
    result: number;
    color: string;
    text: string;
  }) => {
    snackbarMsg.value = data;
  };

  const isProgressing = ref(null);

  const setIsProgressing = (data) => {
    isProgressing.value = data;
  };

  return {
    snackbarMsg,
    setSnackbarMsg,
    isProgressing,
    setIsProgressing,
  };
});

export const loadingStore = defineStore("loading", () => {
  const loading = ref(false);
  const setLoading = (value: boolean) => {
    loading.value = value;
  };

  return {
    loading,
    setLoading,
  };
});
