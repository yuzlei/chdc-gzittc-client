<script setup lang="ts">
import {storeToRefs} from "pinia";
import Banner from "@/components/banner.vue";
import defaultStore from "@/store";
import abridge from "@/components/list.vue"
import pagination from "@/components/pagination.vue"
import {onMounted} from "vue";

const store = defaultStore()
const {searchPageNum, staticSearch, searchData, searchPageTotal} = storeToRefs(store)
const {setSearchPageNum, getSearchData} = store

onMounted(async () => await getSearchData())
</script>

<template>
  <banner style="margin-bottom: 60px;" :height="310" :title="`${staticSearch}的搜索结果`"></banner>
  <abridge style="margin-top: 45px;" v-if="searchData" :list="searchData"></abridge>
  <pagination style="margin-top: 30px" @updatePage="setSearchPageNum" v-if="searchData && searchPageTotal" v-model="searchPageNum" :pageTotal="searchPageTotal"></pagination>
</template>