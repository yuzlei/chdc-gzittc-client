<script setup lang="ts">
import {barData} from "@/config";
import headers from "@/components/header.vue"
import footers from "@/components/footer.vue"
import logo from "@/assets/images/logo.png"
</script>

<template>
  <headers :logo="logo" :bar="barData"></headers>
  <router-view></router-view>
  <footers style="margin-top: 50px;" :bar="barData"></footers>
</template>