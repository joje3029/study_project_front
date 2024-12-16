<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["cancel", "delete", "init"]);

const handleCancel = () => {
  emit("cancel");
  emit("init");
};
const handleDelete = () => {
  emit("delete");
};
</script>
<template>
  <v-card comfortable>
    <v-toolbar color="primary" title="삭제">
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-close-box"
          @click="handleCancel"
        ></v-btn>
      </template>
    </v-toolbar>
    <v-card-title>삭제하시겠습니까?</v-card-title>
    <v-card-text>선택된 데이터가 모두 삭제됩니다.</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" color="primary" @click="handleCancel">
        취소
      </v-btn>
      <v-btn variant="flat" color="primary" @click="handleDelete">삭제</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
