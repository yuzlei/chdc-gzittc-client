<script setup lang="ts">
import {ref} from "vue"
import {useRouter} from 'vue-router';
import {storeToRefs} from "pinia";
import defaultStore from "@/store"
import type {Ref} from "vue"
import type {Router} from "vue-router"
import type {IBarList} from "@/types";

const router: Router = useRouter();
const store = defaultStore()
const {search} = storeToRefs(store)
const {setStaticSearch, getSearchData, setSearchPageNum} = store

const state: Ref<boolean> = ref(false)

const searchEvent = () => {
  setSearchPageNum(1)
  getSearchData()
  setStaticSearch(search.value)
  router.push('/index/search')
}

defineProps<{ logo: string, bar: IBarList }>();
</script>

<template>
  <div class="header">
    <div class="header-content">
      <img @click="router.push('/')" :src="logo" alt="logo">
      <div class="bar">
        <ul>
          <li v-for="item in bar" :key="item._id">
            <router-link :to="item.href">{{ item.name }}</router-link>
          </li>
        </ul>
        <div class="search">
          <input v-model="search" type="text"/>
          <svg @click="searchEvent" viewBox="2 9 20 5" focusable="false">
            <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
      </div>
      <svg v-if="state" @click="state = !state" focusable="false" viewBox="64 64 896 896">
        <path
            d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
      </svg>
      <svg v-else @click="state = !state" focusable="false" viewBox="0 0 1024 1024">
        <path
            d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
      </svg>
    </div>
    <div class="bar-mobile" v-if="state">
      <ul>
        <li v-for="item in bar" @click="router.push(item.href)" :key="item._id">
          <router-link :to="item.href">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="search">
        <svg @click="searchEvent" viewBox="2 9 20 5" focusable="false">
          <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input v-model="search" type="text"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/header";
</style>