<script setup lang="ts">
const emit = defineEmits(["onClick"]);
const onClick = () => {
  emit("onClick");
};
</script>

<template>
  <v-tooltip location="bottom" text="view">
    <template #activator="{ props: tooltipProps }">
      <v-btn
        class="ma-1"
        icon="mdi-text-box-search"
        size="30"
        variant="text"
        color="info"
        elevation="0"
        v-bind="tooltipProps"
        @click="onClick"
      />
    </template>
  </v-tooltip>
</template>
