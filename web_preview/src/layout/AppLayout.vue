<template>
  <div class="container">
    <div class="container_left">左</div>
    <div class="content">
      <div class="box"><router-view/></div>
      
    </div>
    <div class="container_right">右</div>
  </div>
  <!-- 子路由出口 -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  position: relative;
  .container_left {
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
    height: 100%;
  }
  .container_right {
    position: fixed;
    top: 0;
    right: 0;
    width: 15%;
    height: 100%;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: center;

    .box {
      width: 50%;
    }
  }
}
</style>