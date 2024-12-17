<template>
  <v-container class="border1">
    <v-btn class="border2" @click="goToSolve">
      문제풀기
    </v-btn>
    <v-btn  class="border2" @click="goToCreate">
      문제 등록
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goToSolve = () => {
    router.push('/test/solve');
  }
  const goToCreate = () => {
    router.push('/test/create');
  }
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
