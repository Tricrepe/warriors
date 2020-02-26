<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30" alt="" />
      <div class="px-2 flex-grow-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-label fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary text-title">
        立即下载
      </button>
    </div>
    <div class="nav nav-inverse bg-primary py-3 d-flex text-white jc-around">
      <div class="nav-item active">
        <router-link class="nav-link" tag="div" to="/">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
