<script setup lang="ts">
import { ref, watch } from 'vue';
import router from '../routers';

function handleMenuSelect() {
    const activeIndex = ref(0);
    const indexSwitch = (index: number) => {
        activeIndex.value = index;
    };

    return {
        activeIndex,
        indexSwitch,
    };
}

const indexMethod = handleMenuSelect();

watch(indexMethod.activeIndex, (newValue, oldValue) => {
    if (newValue != oldValue) {
        if (newValue == 1) {
            router.push('/Main/Community');
        }
        if (newValue == 2) {
            router.push('/Main/MyPosts');
        }
    }
});
</script>

<template>
    <el-container>
        <el-aside>
            <el-menu default-active="1" @select="indexMethod.indexSwitch">
                <el-menu-item index="1">
                    <span>帖子广场</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span>我的帖子</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <RouterView />
        </el-main>
    </el-container>
</template>

<style scoped>
.el-aside {
    width: 200px;
    margin-top: 20px;
    position: relative;
}
</style>