<script setup lang="ts">
import {apiUrl} from "@/config";
import {onMounted, ref} from "vue";
import {completeImagePath, formatTime} from "@/utils"
import {storeToRefs} from "pinia";
import defineStore from "@/store";
import axios from "axios";
import banner from "@/components/banner.vue"
import Content from "@/components/content.vue";
import type {Ref} from "vue";
import type {IAbridgeUpdatesContent, IAbridgeUpdatesView} from "@/types"

const store = defineStore()
const {updateId} = storeToRefs(store)

const data: Ref<IAbridgeUpdatesView & IAbridgeUpdatesContent> = ref(null)
const url: string = `${apiUrl}/updates`

onMounted(async () => data.value = (await axios.get(`${url}/search`, {params: {_id: updateId.value}})).data[0])

const replaceContent = (str: string): string => str.replaceAll(/<img[^>]+src="([^">]+)"/g, ((_, url: string) => `<img src="${apiUrl}${url}"`))
</script>

<template>
  <banner style="margin-bottom: 60px;" mask v-if="data" :img="`url(${completeImagePath(data.cover)})`" :height="330"
          :title="data.title" :content="`于 ${formatTime(data.createdAt)} 由 ${data.author} 发布`"></banner>
  <content v-if="data" :str="replaceContent(data.content)"></content>
</template>
