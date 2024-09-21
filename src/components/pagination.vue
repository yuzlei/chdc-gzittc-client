<script setup lang="ts">
import {withDefaults} from "vue";

const props = withDefaults(defineProps<{pageTotal: number; modelValue: number, hideOne?: boolean, pageNum?: number}>(), {
  hideOne: true,
  pageNum: 5,
})

const emit = defineEmits<{(e: 'updatePage', page: number): void}>();

const computedPage = () => {
  const result: Array<number> = Array.from({length: (Math.ceil(props.pageNum - 2))}, ((_, i:number) => i + props.modelValue - (Math.floor((props.pageNum - 2) / 2))))
  if(props.pageTotal <= props.pageNum) return Array.from({length: props.pageTotal}, (_, i:number) => i + 1).filter(item => item >= 2 && item <= props.pageTotal - 1)
  const arr: Array<number> = result.filter(item => item < 2 || item > props.pageTotal - 1).sort((a, b) => a - b)
  if(arr[0] < 2) return result.map(item => item + (2 - arr[0]))
  if(arr.at(-1) > props.pageTotal - 1) return result.map(item => item + (props.pageTotal - arr.at(-1) - 1))
  return result
}
</script>

<template>
  <div v-if="hideOne ? pageTotal > 1 : true" class="pagination">
    <ul>
      <li class="hover" @click="emit('updatePage', modelValue - 1)" v-if="modelValue > 1">
        <span>上一页</span>
      </li>
      <li class="hover" @click="emit('updatePage', 1)">
        <span :class="{active: modelValue === 1}">1</span>
      </li>
      <li v-if="modelValue >= pageNum - (Math.floor((pageNum - 2) / 2)) && pageTotal > pageNum">
        <span >...</span>
      </li>
      <li class="hover" v-for="item in computedPage()"
          :key="item" @click="emit('updatePage', item)">
        <span :class="{active: item === modelValue}">{{item}}</span>
      </li>
      <li v-if="modelValue < pageTotal - (Math.ceil((pageNum - 2) / 2)) && pageTotal > pageNum">
        <span>...</span>
      </li>
      <li class="hover" @click="emit('updatePage', pageTotal)">
        <span :class="{active: modelValue === pageTotal}">{{pageTotal}}</span>
      </li>
      <li class="hover" @click="emit('updatePage', modelValue + 1)" v-if="modelValue < pageTotal">
        <span>下一页</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/pagination";
</style>