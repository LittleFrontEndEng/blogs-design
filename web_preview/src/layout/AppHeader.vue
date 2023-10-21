<template>
  <div class="sc-AxhUy JixXX">
    layout头
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const defaultAvater = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const store = useStore();
const isLogin = ref(false);
const userInfo = ref(null);
const router = useRouter();
const isUploadShow = ref(false);
onMounted(() => {
  isLogin.value = !!store.state.user;
  userInfo.value = store.state.user;
})

// 登录
const jumptologin = () => {
  router.push('/login');
}

// 关闭弹窗
const closeDielog = () => {
  isUploadShow.value = false;
}
</script>
<style lang="">
</style>