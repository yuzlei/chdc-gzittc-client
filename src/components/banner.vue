<script setup lang="ts">
import {withDefaults} from "vue"
import {useRouter} from 'vue-router';
import type {Router} from "vue-router"
import type {IBarList} from "@/types";

const router: Router = useRouter();

withDefaults(defineProps<{img?: string, title?: string, content?: string, btn?: IBarList, height?: number, mask?: boolean }>(), {
  img: 'linear-gradient(45deg, rgba(168,29,132,1) 0, rgb(234,57,111) 100%)',
})
</script>

<template>
  <div :style="{height: `${height}px`}" class="banner">
    <div :style="{backgroundImage: img}" class="banner-content"></div>
    <div :style="{backgroundColor: mask ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)' }" class="mask">
      <h1 v-html="title"></h1>
      <p v-html="content"></p>
      <ul v-if="btn">
        <li v-for="item in btn" :key="item._id" @click="router.push(item.href)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/banner";
</style>