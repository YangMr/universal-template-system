<template>
  <ul>
    <li>
      {{props.item.name}}
      <Item v-for="(v,i) in props.item.children" :key="i" :item = "v" />
    </li>
  </ul>
</template>

<script setup >
import { defineProps } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style></style>
