<script setup lang="ts">
import headers from "@/components/header.vue"
import footers from "@/components/footer.vue"
import logo from "@/assets/images/logo.png"
import {setId} from "@/utils";
import type {IBarList} from "@/types";

const barData: IBarList = setId([{
  name: "首页",
  href: "/index/home",
}, {
  name: "动态",
  href: "/index/updates",
}, {
  name: "联系我们",
  href: "/index/contact",
}])
</script>

<template>
  <headers :logo="logo" :bar="barData"></headers>
  <router-view></router-view>
  <footers style="margin-top: 50px;" :bar="barData"></footers>
</template>