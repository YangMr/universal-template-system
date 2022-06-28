<template>
  <div>
    <Item v-for="(item,i) in array" :key="i" :item = "item" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Item from './Item'

const data = [
  {
    id: 1,
    name: 'IT互联网',
    children: [
      {
        id: 11,
        name: '前端',
        children: [
          {
            id: 111,
            name: 'html',
            children: [
              {
                id: 11113,
                name: 'p'
              },
              {
                id: 11114,
                name: 'h1'
              },
              {
                id: 11115,
                name: 'ul'
              }
            ]
          },
          {
            id: 112,
            name: 'css'
          },
          {
            id: 113,
            name: 'javascript'
          }
        ]
      },
      {
        id: 12,
        name: '后端'
      },
      {
        id: 13,
        name: '运维'
      }
    ]
  },
  {
    id: 2,
    name: '设计创作',
    children: [
      {
        id: 22,
        name: '平面设计'
      },
      {
        id: 23,
        name: '网页设计'
      }
    ]
  },
  {
    id: 3,
    name: '升学考研',
    chidlren: []
  },
  {
    id: 1,
    name: '职企考证',
    chidlren: []
  }
]

const array = reactive(data)

</script>

<style lang="scss" scoped>
li.one{color : #fff;}
li.two{color : yellow;}
li.three{color : #f60;}
</style>
