<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex mb-4">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-sm flex-1">{{ title }}</div>
      <i class="iconfont icon--superhero"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
};
</script>
