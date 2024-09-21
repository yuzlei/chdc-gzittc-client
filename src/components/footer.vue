<script setup lang="ts">
import {IBarList} from "@/types";

defineProps<{ bar: IBarList }>();
</script>

<template>
  <div class="footer">
    <div class="footer-content">
      <ul>
        <li v-for="item in bar" :key="item._id">
          <router-link :to="item.href">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="info">
        <p>CHDC-GZITTC 保留所有权利 | <a href="#">粤ICP备2021020645号</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/footer";
</style>