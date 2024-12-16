<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-btn
    class="ma-1"
    variant="text"
    elevation="0"
    prepend-icon="mdi-arrow-left"
    @click="onClick"
    v-bind="props"
    color="primary"
  >
    back to all {{ title }}
  </v-btn>
</template>
