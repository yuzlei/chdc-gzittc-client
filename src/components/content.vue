<script setup lang="ts">
import "@/styles/markdown.scss"

defineProps<{ str?: string | Promise<string> }>();
</script>

<template>
  <div class="content">
    <div v-html="str" class="content-center"></div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/content";
</style>