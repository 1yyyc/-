<template>
<!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">-->
<!--    <el-radio-button :label="false">expand</el-radio-button>-->
<!--    <el-radio-button :label="true">collapse</el-radio-button>-->
<!--  </el-radio-group>-->
  <div style="width: 100%;  height: 50px;background-color:rgb(235,241,246);">
    <span class="txt1">AI</span>
    <span class="txt2">医学影像平台</span>
    <img class="img1" src="@/plug-in/img/u168.svg"/>
    <div style="cursor:pointer;position: absolute;left: 220px;top: 10px" @click="isCollapse=!isCollapse">
      <el-icon class="item" size="31"><Open /></el-icon>
    </div>
  </div>

  <div class="clearfix" style="float:left;">
    <el-menu
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        style="height: calc(100vh - 50px);"
        background-color="rgb(235,241,246)"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>模型测试</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  @click="switchRoute('/fenlei')" index="/fenlei">图像分类</el-menu-item>
          <el-menu-item @click="switchRoute('/fenge')" index="/fenge">图像分割</el-menu-item>
          <el-menu-item @click="switchRoute('/jiance')" index="/jiance">图像检测</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item @click="switchRoute('/ModelTrain')"  index="/ModelTrain">
        <el-icon><icon-menu /></el-icon>
        <template #title>模型训练</template>
      </el-menu-item>
      <el-menu-item @click="switchRoute('/GPU')" index="/GPU">
        <el-icon><document /></el-icon>
        <template #title>GPU信息</template>
      </el-menu-item>
      <el-menu-item @click="switchRoute('/test')" index="/test">
        <el-icon><setting /></el-icon>
        <template #title>系统管理</template>
      </el-menu-item>
    </el-menu>
  </div>
  <div style="display: flex;height: 41px;background-color:rgb(235,241,246);">
    <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="demo-tabs"
        closable
        @tab-remove="removeTab"
        @tab-click="handleClickTabs"
    >
      <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
  <div style="display: flex">
    <router-view/>
  </div>
</template>

<script>
import { ref,watch } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
    Open
} from '@element-plus/icons-vue'
import router from "@/router";
import {useRoute} from 'vue-router'

export default {
  name:'UserManage',
  components:{Document,IconMenu,Location,Setting,Open},
  setup(){
    let tabIndex = 2
    const editableTabsValue = ref('2')
    const editableTabs = ref([
      // {
      //   title: '',
      //   name: '',
      //   content: '',
      //   route:''
      // },
    ])

    const addTab = (targetName,route) => {
      const newTabName = `${++tabIndex}`
      editableTabs.value.push({
        title: targetName,
        name: newTabName,
        route:route,
        content:''
      })
      editableTabsValue.value = targetName
    }
    const switchRoute=(path)=>{
      console.log('path',path)
      router.push(path)
    }
    const removeTab = (targetName) => {
      const tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter((tab) => tab.name !== targetName)

    }

    const route=useRoute()
    watch(route,(val)=>{
      const index=editableTabs.value.findIndex(v=>v.name===val.path)
      if(index<0){
        const tab={
          title:val.meta.title,
          name:val.path
        }
        editableTabs.value.push(tab)
     }
      editableTabsValue.value=val.path
    },{immediate:true})
    const handleClickTabs=(tab)=>{

      switchRoute(tab.paneName)
    }

    let isCollapse=ref(false)
    const handleOpen=(key,keyPath)=>{
      console.log(key, keyPath)
    }
    const handleClose=(key,keyPath)=>{
      console.log(key, keyPath)
    }

    return{
      editableTabs,
      editableTabsValue,
      addTab,
      removeTab,
      isCollapse,
      handleOpen,
      handleClose,
      switchRoute,
      handleClickTabs
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.clearfix::after{
  content:'';
  display: block;
  clear: both;
  overflow: hidden;
  height: 0;
}
.img1{
  position: absolute;
  top: 20px;
  left: 20px;
}
.txt1{
  position: absolute;
  top: 20px;
  left: 24px;
  color: white;
  z-index: 9;
}
.txt2{
  position: absolute;
  left: 57px;
  top: 18px;
  color: #00868B;
}
.item:hover{
  color: #00a4ff;
}
</style>
