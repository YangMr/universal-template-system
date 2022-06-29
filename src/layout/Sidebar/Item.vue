<template>
  <template v-if="props.data && !props.data.children">
    <el-menu-item :index="props.data.path">
      {{props.data.title}}
    </el-menu-item>
  </template>
  <template v-if="props.data && props.data.children && props.data.children.length > 0">
    <el-sub-menu :index="props.data">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{props.data.title}}</span>
      </template>
      <Item v-for="(item) in props.data.children" :key="item" :data="item"></Item>
    </el-sub-menu>
  </template>
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
<style scoped lang="scss">

</style>
