<script setup lang="ts">
import { RouterView } from 'vue-router';
import myFooter from './components/footer.vue';
import myHeader from './components/header.vue';
</script>

<template>
  <div class="background-container">
    <div class="fliter">
      <el-container>
        <!-- <el-header>
          <my-header></my-header>
        </el-header> -->
        <router-view />
        <el-footer>
          <my-footer></my-footer>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<style scoped>
.background-container {
  width: 100%;
  height: 100%;
  background-image: url('./assets/bg.svg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: fixed;
}

.fliter {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
