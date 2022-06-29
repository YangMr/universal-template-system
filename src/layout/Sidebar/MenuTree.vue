<template>
  <Item v-for="(item) in props.tree" :data="item" :key="item.id"></Item>
</template>

<script setup>
import { defineProps } from 'vuex'
import Item from './Item'
const props = defineProps({
  tree: {
    type: Array,
    default: () => []
  }
})

</script>

<style scoped lang="scss"></style>
