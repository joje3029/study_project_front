<template>
  <v-container>
    <v-sheet class="border3">
      <v-card class="d-flex justify-space-between">
        <v-btn>
          목록으로 돌아가기
        </v-btn>
        <v-text-field label="점수" v-model="score" />
      </v-card>
    </v-sheet>
   <v-sheet class="d-flex border3">

    <v-card class="mr-4 border5" style="width: 50%;">
        <TestViewCompoenent />
    </v-card>

    <v-card class="border5" style="width: 50%;">
        <TestViewCompoenent />
    </v-card>
    </v-sheet>
    <v-sheet class="border3 d-flex justify-end">
      <v-btn>
        정답 확인
      </v-btn>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import TestViewCompoenent from '@/components/test/TestViewCompoenent.vue';
</script>

<style scoped>
.border1{
  border: 1px solid black;
}
.border2{
  border: 1px solid red;
}
.border3{
  border: 1px solid blue;
}
.border4{
  border: 1px solid green;
}
.border5{
  border: 1px solid white;
}
</style>