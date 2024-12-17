<template>
    <v-container>
      <!-- 검색 -->
      <v-card>
      <!-- <v-btn @click="goToCard">
        <v-icon>mdi-card-text</v-icon>
        암기하러가기(카드형태)
      </v-btn> -->

      <!-- 암기노트 (노트형태) : 여기는 pdf 로 출력-->
      <v-btn @click="goToNote">
        <v-icon>mdi-book-open</v-icon>
        암기하러가기(노트형태)
      </v-btn>

      <!-- 암기 등록 -->
      <v-btn @click="goToCreate">
        <v-icon>mdi-plus</v-icon>
        암기 등록  
      </v-btn>
      </v-card>
      <v-card class="d-flex flex-row align-center">
        <v-responsive min-width="100" max-width="240">
          <v-text-field
            density="compact"
            clearable
            required
            class="mt-3 mb-3"
            hide-details
            variant="outlined"
            placeholder="검색 할 내용을 입력해주세요"
            
          />
        </v-responsive>
        <div class="ml-3">
          <v-btn color="primary" >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
       </v-card>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goToCard = () => {
    router.push({name:'memory-notes-view-card'});
  };
  const goToNote = () => {
    router.push({name:'memory-notes-view-note'});
  };
  const goToCreate = () => {
    router.push({name:'memory-notes-add'});
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
  .border5{
    border: 1px solid white;
  }
  </style>