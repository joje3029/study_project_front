<template>
  <v-container class="border1">
    <v-btn class="border2" @click="goToSolve">
      문제풀기
    </v-btn>
    <v-btn  class="border2" @click="goToCreate">
      문제 등록
    </v-btn>
    <v-card>
      <v-card-title>
        채점 목록
      </v-card-title>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>점수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>날짜</td>
              <td>점수</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goToSolve = () => {
    router.push({name:'test-solve'});
  }
  const goToCreate = () => {
    router.push({name:'test-create'});
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
