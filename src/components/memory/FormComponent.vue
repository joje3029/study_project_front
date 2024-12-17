<template>
  <div>
    <h1>FormComponent</h1>
    <v-btn @click="goToList">
      <v-icon>mdi-arrow-left</v-icon>
      목록돌아가기
    </v-btn>

    <v-sheet class="border1">
      <!-- 여기에서 editor로 넘기는게 암기하고 하기 좋겠지. -->
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goToList = () => {
  router.push({name:'memory-notes-main'});
};
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
</style>
