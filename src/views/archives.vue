<script setup lang="ts">
import {apiUrl} from "@/config";
import {onMounted, ref} from "vue";
import {formatTime} from "@/utils"
import defineStore from "@/store";
import axios from "axios";
import banner from "@/components/banner.vue"
import Content from "@/components/content.vue";
import type {Ref} from "vue";
import type {IAbridgeUpdatesContent, IAbridgeUpdatesView} from "@/types"
import {storeToRefs} from "pinia";

const store = defineStore()

const {updateId} = storeToRefs(store)

const data: Ref<IAbridgeUpdatesView & IAbridgeUpdatesContent | null> = ref(null)

onMounted(async () => {
  const res = await axios.get(`${apiUrl}/updates/search`, {params: {_id: updateId.value}})
  data.value = res.data[0];
})
</script>

<template>
  <banner style="margin-bottom: 60px;" mask v-if="data" :img="`url(${data.cover})`" :height="330"
          :title="data.title" :content="`于 ${formatTime(data.createdAt)} 由 ${data.author} 发布`"></banner>
  <content v-if="data" :str="data.content"></content>
</template>