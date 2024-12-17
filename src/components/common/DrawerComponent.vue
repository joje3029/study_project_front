<template>
  <v-card flat class="mx-auto border3" color="secondary">
    <v-card
      :ripple="false"
      flat
      class="bg-shades-transparent font-weight-bold text-h5 pa-10"
      @click="goMain"
    >
      정보처리기사 실기
    </v-card>
    <v-list nav class="pa-5">
      <template
        v-for="({ title, value, icon, path }, i) in menuUtils.menuItem"
        :key="`menu_item_${i}`"
      >
        <v-list-item
          rounded
          :title="title"
          :value="value"
          :to="path"
          :prepend-icon="icon"
          :active="isLinkActive(path)"
          :active-color="isLinkActive(path) ? 'primary' : null"
          density="compact"
          class="pa-2 rounded-lg"
          style="padding-inline-start: 10px"
        ></v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { storage } from "@/utils/storage";
import { menuUtils } from "@/utils/menuUtils";

const route = useRoute();
const router = useRouter();

const isLinkActive = (link) => {
  return route.path.includes(link);
};

const goMain = () => {
  router.push({name:"main"});
};
</script>
<style scoped></style>
