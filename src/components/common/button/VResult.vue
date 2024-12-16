<script setup lang="ts">
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-btn
    class="ma-1"
    elevation="0"
    color="primary"
    size="small"
    @click="onClick"
  >
    View Result
  </v-btn>
</template>
