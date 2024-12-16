<script setup lang="ts">
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-tooltip location="bottom" text="delete">
    <template #activator="{ props: tooltipProps }">
      <v-btn
        class="ma-1"
        icon="mdi-eraser"
        size="30"
        variant="text"
        color="error"
        elevation="0"
        v-bind="tooltipProps"
        @click="onClick"
      />
    </template>
  </v-tooltip>
</template>
