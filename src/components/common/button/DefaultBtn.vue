<script setup lang="ts">
const props = defineProps<{
  title: string;
  color: string;
}>();
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-btn
    class="ma-1"
    elevation="0"
    variant="flat"
    v-bind="props"
    @click="onClick"
  >
    {{ title }}
  </v-btn>
</template>
