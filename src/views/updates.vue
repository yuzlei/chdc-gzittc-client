<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {storeToRefs} from "pinia";
import {apiUrl} from "@/config";
import axios from "axios";
import defaultStore from "@/store"
import Banner from "@/components/banner.vue";
import abridge from "@/components/list.vue";
import pagination from "@/components/pagination.vue";
import type {Ref} from "vue"
import type {IAbridgeUpdatesViewList} from "@/types";

const store = defaultStore()
const {updatePageNum} = storeToRefs(store)
const {setUpdatePageNum} = store

const abridgeList: Ref<IAbridgeUpdatesViewList> = ref(null)
const pageTotal: Ref<number> = ref(null)
const url: string = `${apiUrl}/updates`

const getData = async (): Promise<void> => {
  const {data: {data, pageTotal: _pageTotal}} = await axios.get(`${url}/pages`, {params: {page: updatePageNum.value}})
  abridgeList.value = data
  pageTotal.value = _pageTotal
}

watch(updatePageNum, _ => getData())

onMounted(async () => await getData())
</script>

<template>
  <banner style="margin-bottom: 60px;" :height="310" :title="'动态'"></banner>
  <abridge style="margin-top: 45px;" v-if="abridgeList" :list="abridgeList"></abridge>
  <pagination style="margin-top: 30px" v-if="abridgeList && pageTotal" v-model="updatePageNum"
              @updatePage="setUpdatePageNum" :pageTotal="pageTotal"></pagination>
</template>