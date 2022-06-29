<template>
  <div>
     <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/profile"
        text-color="#fff"
        router
      >
        <!-- 如果菜单数据里面没有子菜单数据,则使用el-menu-item渲染
        如果菜单数据里面有子菜单数据,则使用el-sub-menu渲染 -->
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>

          <el-menu-item index="1-3">item three</el-menu-item>

          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu> -->
        <template v-for="(item,index) in menuList" :key="item">
          <template v-if="item && !item.children">
            <el-menu-item :index="item.path">
              <el-icon><icon-menu /></el-icon>
              <span>{{item.title}}</span>
            </el-menu-item>
          </template>

          <template v-if="item && item.children && item.children.length > 0">
            <el-sub-menu :index="index">
               <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{item.title}}</span>
               </template>

              <template v-for="(m) in item.children" :key="m">
                  <template v-if="m && !m.children">
                    <el-menu-item :index="m.path">
                      {{m.title}}
                    </el-menu-item>
                  </template>
                  <template v-if="m && m.children && m.children.length > 0">
                    <el-sub-menu :index="m">
                      <template #title>
                          <el-icon><location /></el-icon>
                          <span>{{m.title}}</span>
                      </template>
                    </el-sub-menu>
                  </template>
              </template>

            </el-sub-menu>
          </template>

        </template>

      </el-menu>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const menuList = reactive([
  {
    title: '个人中心',
    path: '/profile'
  },
  {
    title: '用户',
    children: [
      {
        title: '员工管理',
        path: '/staff',
        children: [
          {
            title: '市场员工'
          },
          {
            title: '研发员工'
          }
        ]
      },
      {
        title: '角色列表',
        path: '/role'
      },
      {
        title: '权限列表',
        path: '/premission'
      }
    ]
  },
  {
    title: '文章',
    children: [
      {
        title: '文章排名',
        path: '/article'
      },
      {
        title: '创建文章',
        path: '/create'
      }
    ]
  }
])
</script>

<style lang="scss" scoped>
li.one{color : #fff;}
li.two{color : yellow;}
li.three{color : #f60;}
</style>
