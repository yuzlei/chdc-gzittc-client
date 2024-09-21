<script setup lang="ts">
import {infoData} from "@/config"
import {bannerData, bannerBtnData} from "@/config";
import {onMounted, ref, Ref} from "vue";
import axios from "axios"
import banner from "@/components/banner.vue"
import info from "@/components/info.vue"
import member from "@/components/member.vue"
import achieve from "@/components/achieve.vue"
import bannerImg from "@/assets/images/banner.jpg"
import {apiUrl} from "@/config";

import type {IAchieveList, IMemberList} from "@/types"

const num: number = 8

const memberList: Ref<IMemberList | null> = ref(null), achieveList: Ref<IAchieveList | null> = ref(null)

onMounted(async () => {
  const [member, achieve] = await Promise.all([axios.get(`${apiUrl}/members/search`), axios.get(`${apiUrl}/achieves/search`)]);
  memberList.value = member.data || null
  achieveList.value = achieve.data || null
})
</script>

<template>
  <banner style="margin-bottom: 60px;" mask :img="`url(${bannerImg})`" :title="bannerData.title"
          :content="bannerData.content" :btn="bannerBtnData"></banner>
  <info style="margin-top: 40px;" v-for="item in infoData.slice(0, 3)" :title="item.title" :content="item.content"
        :key="item._id"></info>
  <member style="margin-top: 35px;" v-if="memberList" :memberList="memberList" :num="num"></member>
  <info style="margin-top: 40px;" v-for="item in infoData.slice(3, 4)" :title="item.title" :content="item.content"
        :key="item._id"></info>
  <achieve style="margin-top: 30px;" v-if="achieveList" :achieveList="achieveList"></achieve>
</template>