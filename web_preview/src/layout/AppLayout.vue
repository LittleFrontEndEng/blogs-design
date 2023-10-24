<template>
  <div class="container">
    <div class="container_left">左</div>
    <div class="content"><router-view/></div>
    <div class="container_right">右</div>
  </div>
  <!-- 子路由出口 -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  .container_left, .container_right {
    width: 300px;
    height: 100%;
  }

  .content {
    flex: 1;
    height: 100%;
    margin: 0 16px;
    background-color: purple;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }
}
</style>