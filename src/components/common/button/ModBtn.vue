<script setup lang="ts">
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-tooltip location="bottom" text="modify">
    <template #activator="{ props }">
      <v-btn
        class="ma-1"
        icon="mdi-pencil"
        size="30"
        variant="text"
        color="secondary"
        elevation="0"
        v-bind="props"
        @click="onClick"
      />
    </template>
  </v-tooltip>
</template>
