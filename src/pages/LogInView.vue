<template>
  <v-container :fluid="true" class="pa-0">
    <v-sheet class="w-100 h-screen d-flex align-center bg-shades-transparent">
      <v-card class="mx-auto px-6 py-8" min-width="344" density="comfortable">
        <div class="text-h5">정처기 실기</div>

        <v-form v-model="data.form" @submit.prevent="signIn" class="mt-3">
          <v-text-field
            v-model="data.userId"
            :readonly="data.loading"
            :rules="rules.idRequired"
            class="mb-2"
            :clearable="true"
            label="아이디"
            variant="solo-filled"
            placeholder="아이디를 입력해주세요."
          ></v-text-field>

          <v-text-field
            v-model="data.userPw"
            :readonly="data.loading"
            :rules="rules.passwordRequired"
            :clearable="true"
            type="password"
            label="비밀번호"
            variant="solo-filled"
            placeholder="비밀번호를 입력해주세요."
          ></v-text-field>

          <v-btn
            :disabled="!data.form"
            :loading="data.loading"
            block
            color="#424242"
            size="large"
            type="submit"
          >
            로그인
          </v-btn>
        </v-form>
      </v-card>
      <v-row
        class="position-absolute w-100 bg-transparent"
        style="bottom: 0; left: 0"
      >
        <v-sheet class="bg-shades-transparent d-flex align-end"
          >Copyright © 2024 정처기 실기
        </v-sheet>
      </v-row>
    </v-sheet>
  </v-container>

  <!--  snackbars-->
  <v-snackbar v-model="data.snackbar" timeout="2000" location="top">
    {{ data.snackbarText }}
    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="data.snackbar = false">
        닫기
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { storage } from "@/utils/storage";
// import { userManagerService } from "@/services/management/userManagerService";

const router = useRouter();

const data = ref({
  form: false,
  userId: "",
  userPw: "",
  loading: false,
  snackbar: false,
  snackbarText: "",
});

const rules = {
  idRequired: [(v: string) => !!v || "아이디를 입력하세요."],
  passwordRequired: [(v: string) => !!v || "비밀번호를 입력하세요."],
};

const resetForm = () => {
  data.value.userId = "";
  data.value.userPw = "";
  data.value.loading = false;
};

const signIn = () => {
  // 임시 로그인 체크 (예시: admin/admin123!)
  if (data.value.userId === "admin" && data.value.userPw === "admin123!") {
    setTimeout(() => {
      data.value.loading = false;
      router.push("main");
    }, 1000);
  } else {
    setTimeout(() => {
      data.value.loading = false;
      data.value.snackbar = true;
      data.value.snackbarText = "아이디 또는 비밀번호가 올바르지 않습니다.";
      resetForm();
    }, 1000);
  }

  // 서비스 연결 준비
  // if (!data.value.form) return;
  // data.value.loading = true;
  // setTimeout(() => (data.value.loading = false), 2000);

  // const param = {
  //   id: data.value.userId,
  //   password: data.value.userPw,
  // };

  // userManagerService.signIn(param).then((d) => {
  //   if (d.data.success === true) {
  //     storage.setAuth(d.data.data);
  //     router.push("host-management");
  //   } else {
  //     resetForm();
  //     data.value.snackbar = true;
  //     data.value.snackbarText = d.data?.errorMessage;
  //   }
  // });
};
</script>
<style scoped>
.v-row {
  margin: 0px !important;
}

.ct-img {
  width: 350px;
}
</style>
