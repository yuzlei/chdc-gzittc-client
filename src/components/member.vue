<script setup lang="ts">
import {ref} from "vue";
import type {Ref} from "vue"
import type {IMemberList} from "@/types";
import {completeImagePath} from "@/utils";

const {num} = defineProps<{ num: number, memberList: IMemberList }>();

const more: Ref<number> = ref(num)
</script>

<template>
  <div class="member">
    <ul>
      <li v-for="item in memberList.slice(0, more)" :key="item._id">
        <img :src="completeImagePath(item.head)" :alt="item.name">
        <h1>{{ item.name }}</h1>
        <h6>{{ item.status }}</h6>
      </li>
    </ul>
    <p v-if="more < memberList.length" @click="more += num" class="more">查看更多</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/member";
</style>