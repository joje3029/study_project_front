<script setup lang="ts">
const props = defineProps<{
  count: number;
  color: string;
}>();
</script>

<template>
  <v-chip class="ma-1" elevation="0" v-bind="props"> 총 {{ count }}개 </v-chip>
</template>
