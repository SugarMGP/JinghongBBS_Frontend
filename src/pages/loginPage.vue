<template>
    <div class="form-container">
        <div class="form-content">
            <div class="form-title">用户登录</div>
            <el-form label-width="auto" :model="formLabelAlign" style="max-width: 400px" size="large">
                <el-form-item label="用户名" label-position="right">
                    <el-input v-model="formLabelAlign.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="密码" label-position="right">
                    <el-input v-model="formLabelAlign.password" type="password" placeholder="请输入密码" show-password />
                </el-form-item>
                <el-button type="primary" plain size="default">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const formLabelAlign = ref({
    username: '',
    password: '',
})
</script>

<style scoped>
.form-container {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form-content {
    border: 1px solid #dcdfe6;
    border-radius: 15px;
    padding: 20px;
    width: 400px;
    background-color: #fff;
}

.form-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
}

.el-form {
    margin-top: -10px;
    padding-top: 20px;
}

.el-button {
    position: relative;
    left: 85%;
}
</style>