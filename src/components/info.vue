<script setup lang="ts">
import type {IInfo} from "@/types";

defineProps<IInfo>();
</script>

<template>
  <div class="info">
    <div class="introduction">
      <h1>{{ title }}</h1>
      <p v-html="content"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/info";
</style>