<template>
  <LayoutComponent>
    <router-view />
  </LayoutComponent>
</template>

<script lang="ts" setup>
import LayoutComponent from "@/components/common/LayoutComponent.vue";
</script>
<style scoped>
.border1 {
  border: 1px solid black;
}
.border2 {
  border: 1px solid red;
}
.border3 {
  border: 1px solid blue;
}
.border4 {
  border: 1px solid green;
}
</style>
