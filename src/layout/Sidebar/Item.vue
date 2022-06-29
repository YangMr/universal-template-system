<template>
  <ul>
    <li>
      {{props.data.name}}
      <template v-if="props.data && props.data.children && props.data.children.length > 0">
        <Item v-for="(item) in props.data.children" :data="item" :key="item.id"></Item>
      </template>
    </li>
  </ul>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
