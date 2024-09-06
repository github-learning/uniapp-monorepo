<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="loadSubApp1">加载子应用 1</button>
    <button @click="loadSubApp2">加载子应用 2</button>
    <view v-if="SubAppComponent">
      <component :is="SubAppComponent" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const SubAppComponent = ref(null);

function loadSubApp1() {


  import('../../../../sub-app-1/src/pages/index/index.vue').then((module) => {
    SubAppComponent.value = module.default;
  });
}

function loadSubApp2() {

  import('../../../../sub-app-2/src/pages/index/index.vue').then((module) => {
    SubAppComponent.value = module.default;
  });
}

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
