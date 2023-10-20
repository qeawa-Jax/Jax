<script setup>
  import { NMenu } from 'naive-ui'
</script>


<template>
<div id="app">
  <NMenu :options="menuOptions" mode="horizontal"></NMenu>
  <router-view></router-view>
</div>
</template>

<script>
import {defineComponent,h } from 'vue'
import { RouterLink } from 'vue-router'

const menuOptions = [
  {
    label :() => h(
      RouterLink,
      {
        to : {
          path: "/a"
        }
      },
      {default:()=>"新建项目"}
    ),
    key:"new-project"
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px"
      }
    }
  },
  {
    label :() => h(
      RouterLink,
      {
        to : {
          path: "/b"
        }
      },
      {default:()=>"打开项目"}
    ),
    key:"open-project"
  },
]
export default defineComponent({
  setup(){
    return {
      menuOptions
    }
  }
}
)
</script>
