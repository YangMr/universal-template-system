<template>
  <template v-if="props.item.children && props.item.children.length > 0">
    <ul>

      <li class="two" v-for="(mItem) in props.item.children" :key="mItem.id">
        {{mItem.name}}
       <Item :item="props.item"></Item>
      </li>
    </ul>
  </template>
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
