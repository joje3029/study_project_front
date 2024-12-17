<template>
  <v-container>
    <v-card class="mb-4 border5">
      <v-card-text>
        <TestViewCompoenent />
      </v-card-text>
    </v-card>


    <!-- 두 번째 문제 카드 -->
    <v-card>
      <v-card-text>
        <TestViewCompoenent />
      </v-card-text>
    </v-card>
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