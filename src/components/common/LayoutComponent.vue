<script setup lang="ts">
import { storage } from "@/utils/storage";
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import DrawerComponent from "@/components/common/DrawerComponent.vue";

const route = useRoute();
const router = useRouter();

const menu = [
  {
    title: "비밀번호 변경",
    icon: "mdi-lock",
  },
  {
    title: "로그아웃",
    icon: "mdi-logout",
    click: () => {
      logOut();
    },
  },
];

const drawer = ref(null);
const pageTitle = computed(() => {
  return route.meta.title;
});

const pagePath = computed(() => {
  console.log(route.path);
  return route.path;
});

const logOut = () => {
  storage.clearAuth();
  router.push({name:"signin"});
};

const goHome = () => {
  router.push({name:"main"});
};
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" permanent hide-overlay color="secondary">
      <DrawerComponent />
    </v-navigation-drawer>
    <v-app-bar flat class="bg-shades-transparent border3">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer></v-spacer>
      <v-menu class="border3" location="bottom end">
        <template v-slot:activator="{ props }">
          <v-btn icon color="secondary" class="mr-3" @click="goHome">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn icon color="secondary" v-bind="props" class="mr-3">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menu"
            :key="index"
            :value="index"
            @click="item.click"
            :prepend-icon="item.icon"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-16 h-100 background">
        <v-row>
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-card flat class="text-h5 bg-shades-transparent"
              ><strong>{{ pageTitle }}</strong></v-card
            >
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
