<script setup lang="ts">
import {completeImagePath, debounce} from "@/utils";
import {onMounted, onBeforeUnmount, ref} from "vue"
import type {Ref} from "vue"
import type {IAchieveList} from "@/types";

defineProps<{ achieveList: IAchieveList }>();

const li: Ref<HTMLLIElement> = ref(null)
const width: Ref<number> = ref(null)
const achieveMove: Ref<number> = ref(0)
const share: Ref<number> = ref(0)

const updateWidth: () => void = debounce(() => {
  if (li.value) {
    width.value = li.value[0].clientWidth
    share.value = Math.floor(window.innerWidth / width.value)
  }
  achieveMove.value = 0
}, 500)

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth);
})

onBeforeUnmount(() => window.removeEventListener('resize', updateWidth))
</script>

<template>
  <div class="achieve">
    <div class="achieve-content">
      <div class="left btn" v-if="achieveMove > 0" @click="achieveMove -= width"><</div>
      <div class="right btn" v-if="achieveMove < width * (achieveList.length - share)" @click="achieveMove += width">>
      </div>
      <ul :style="{marginLeft: `-${achieveMove}px`}">
        <li ref="li" v-for="item in achieveList" :key="item._id">
          <div class="medal">
            <div class="medal-content">
              <img :src="completeImagePath(item.imgSrc)" alt="?">
            </div>
          </div>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/achieve";
</style>