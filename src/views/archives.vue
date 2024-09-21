<script setup lang="ts">
import {apiUrl} from "@/config";
import {onMounted, ref} from "vue";
import {formatTime} from "@/utils"
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

onMounted(async () => {
  const res = await axios.get(`${url}/search`, {params: {_id: updateId.value}})
  data.value = res.data[0];
})
</script>

<template>
  <banner style="margin-bottom: 60px;" mask v-if="data" :img="`url(${data.cover})`" :height="330"
          :title="data.title" :content="`于 ${formatTime(data.createdAt)} 由 ${data.author} 发布`"></banner>
  <content v-if="data" :str="data.content"></content>
</template>