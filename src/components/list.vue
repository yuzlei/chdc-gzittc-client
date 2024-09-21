<script setup lang="ts">
import {useRouter} from 'vue-router';
import {formatTime} from "@/utils"
import defineStore from "@/store";
import type {Router} from "vue-router"
import type {IAbridgeUpdatesViewList} from "@/types";

const router: Router = useRouter();
const store = defineStore()
const {setUpdateId} = store

defineProps<{list: IAbridgeUpdatesViewList}>();

const click = (id: string): void => {
  setUpdateId(id)
  router.push(`/index/archives`)
}
</script>

<template>
  <div class="abridge-list">
    <ul>
      <li v-for="item in list" :key="item._id">
        <div @click="click(item._id)" class="img-box">
          <div class="transparent-box"></div>
          <img @click="click(item._id)" :src="item.cover" alt="?">
        </div>
        <div class="message">
          <h1 v-html="item.title" @click="click(item._id)"></h1>
          <p>
            <span v-html="item.ellipsis"></span>
            <span @click="click(item._id)"> 阅读更多…</span>
          </p>
          <span>
            于 {{ formatTime(item.createdAt) }}，由 <span v-html="item.author"></span> 发布
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/list";
</style>