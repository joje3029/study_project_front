<template>
  <v-container>
    <div class="mb-4">
      <div class="d-flex align-center justify-space-between">
        <span>문제</span>
        <v-checkbox v-model="isContinuous" label="연속 등록" />
      </div>
      <v-textarea
        placeholder="문제를 입력하세요..."
        variant="outlined"
        no-resize
        height="200"
        rows="5"
      ></v-textarea>
    </div>

    <div class="mb-4">
      <div class="text-subtitle-1 mb-2">정답</div>
      <v-textarea
        placeholder="정답을 입력하세요..."
        variant="outlined"
        no-resize
        rows="3"
      ></v-textarea>
    </div>

    <v-btn 
      color="primary"
      block
      size="large"
    >
      저장하기
    </v-btn>
    <!-- 1차로는 저장하기 누르면 test list로 이동, 나중에는 연달아 문제 등록 버튼 누르면 연달아 등록 가능하게 할 것. -->

    <v-btn 
      color="primary"
      block
      size="large"
      @click="goToList"
    >
      목록으로 돌아가기
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goToList = () => {
  router.push({name:'test-main'});
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
