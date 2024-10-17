<script setup lang="ts">
import { ref } from "vue";
import router from "../routers";
import { storeToRefs } from "pinia";
import { userStore, loginStore } from "../stores/store";

const newUserStore = userStore();
const newLoginStore = loginStore();

const { loginStatus } = storeToRefs(newLoginStore);
const { userId } = storeToRefs(newUserStore);
const activeIndex = ref("0");

const pushToLogin = () => {
  router.push("/Login");
};

const pushToRegister = () => {
  router.push("/Register");
};

const pushToOut = () => {
  loginStatus.value = false;
  userId.value = -1;
  router.push("/Login");
};
</script>

<template>
  <el-menu :default-active="activeIndex" class="menu" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <div class="flex items-center">
        <span class="text-large font-600 mr-3"> 白糖论坛 </span>
      </div>
    </el-menu-item>

    <div class="flex-grow" />
    <div class="button_div">
      <div class="button" v-show="!loginStatus" :key="1">
        <el-button type="primary" @click="pushToLogin">登录</el-button>
        <el-button class="ml-2" @click="pushToRegister">注册</el-button>
      </div>
      <div v-show="loginStatus" :key="2">
        <div style="display: flex ; flex-direction:row">
          <el-button class="ml-2 button" @click="pushToOut">退出</el-button>
        </div>
      </div>
    </div>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.menu {
  position: fixed;
  left: 2%;
  right: 2%;
  top: 2%;
  background-color: transparent;
}

.button_div {
  position: relative;
}

.button {
  margin-top: 12px;
}
</style>