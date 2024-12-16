<script setup lang="ts">
const props = defineProps<{
  title: string;
  icon: string;
}>();
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-btn
    color="primary"
    :prepend-icon="icon"
    width="100"
    class="ma-1"
    elevation="0"
    @click="onClick"
  >
    {{ title }}
  </v-btn>
</template>
