<template>
    <v-card>
      <div class="question-section mb-6">
        <div class="text-body-1">
          React에서 컴포넌트의 상태를 관리하기 위해 사용하는 Hook은 무엇인가요?
        </div>
        <v-textarea
          variant="outlined"
          placeholder="ㅇㄹㅇ"
          rows="3"
          class="mt-4 no-resize"
        ></v-textarea>
      </div>
  
      <v-alert
        type="error"
        variant="tonal"
        class="mb-6"
      >
        틀렸습니다.
      </v-alert>
  
      <div class="analysis-section mb-6">
        <div class="text-subtitle-1 mb-2">오답 분석</div>
        <div class="text-body-1">
          React의 useState Hook은 함수형 컴포넌트에서 상태를 관리하기 위한 기본적인 Hook입니다.
        </div>
      </div>
  
      <div class="answer-section mb-6">
        <div class="text-subtitle-1 mb-2">정답</div>
        <div class="pa-4 bg-light-green-lighten-5">
          useState
        </div>
      </div>
  
      <div class="d-flex gap-4">
        <v-btn
          block
          color="grey"
          variant="tonal"
        >
          다시 풀기
        </v-btn>
        <v-btn
          block
          color="primary"
        >
          다음 문제
        </v-btn>
      </div>
    </v-card>
  </template>
  
  <script setup lang="ts">
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
  