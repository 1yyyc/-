<template>
<!--  <router-link to="/">首页</router-link>|-->
<!--  <router-link to="/about">about页面</router-link>-->
  <router-view></router-view>
<!--  <button @click="count++">点我Count++</button><br/>-->
<!--  <button @click="person.age++">点我改变person</button>-->
<!--  <div>{{count}}</div>-->
<!--  <div>person.age{{person.age}}</div>-->
<!--  <HelloWorld :age="person.age" msg=""/>-->
<!--  <div v-for="(v,i) in arr" :key="i">-->
<!--    <h2>姓名：{{v.name}}</h2>-->
<!--    <h2>年龄：{{v.age}}</h2>-->
<!--  </div>-->
<!--  <div>-->
<!--    <button @click="isShow=!isShow">点击显示/隐藏</button>-->
<!--    <h3 v-show="isShow">123456</h3>-->
<!--  </div>-->
<!--  <div>-->
<!--    <template v-if="isVis">-->
<!--      <h2 style="color: #1bd4a6">111</h2>-->
<!--    </template>-->
<!--    <template v-else>-->
<!--      <h2>333</h2>-->
<!--    </template>-->
<!--  </div>-->
<!--  <div>{{info}}</div>-->
<!--  <div>{{mainStore.school}}</div>-->
<!--  <el-button @click="t" type="success">Success</el-button>-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {MainStore} from "@/store";


export default {
  name: 'App',
  // setup(){
  //   const mainStore=MainStore()
  //   mainStore.changeSchool()
  //   return{
  //     mainStore
  //   }
  // },
  // mounted() { // 初始化操作
  //   this.timer=setTimeout(()=>{
  //     console.log('555')
  //   },5000)
  // },
  // beforeDestroy() { // 收尾工作
  //   clearTimeout(this.timer)
  // },
  components: {
    HelloWorld,
  },
  // computed:{
  //   info(){
  //     return this.person.name+'==='+this.person.age
  //   },
  // },
  // watch:{
  //   count(newVal,oldVal){
  //     console.log(newVal,oldVal)
  //     console.log(this.person)
  //   },
  //   person:{
  //     deep:true,
  //     immediate:true,
  //     handler(newVal,oldVal){
  //       console.log('@@')
  //     }
  //   },
  //   'person.age'(){
  //     console.log('###')
  //   }
  // },
  // data(){
  //   return{
  //     isShow:false,
  //     isVis:false,
  //     fs:'18',
  //     count:0,
  //     person:{
  //       age:18,
  //       name:'槽子',
  //       school:{
  //         class:'123'
  //       }
  //     },
  //     arr:[{
  //       name:'kk',
  //       age:19
  //     },{
  //       name:'qq',
  //       age:20
  //     },{
  //       name:'ll',
  //       age:21
  //     }]
  //   }
  // },
  methods:{
  //   foo(a){
  //     alert('000')
  //     console.log(this.count)
  //   },
  //   test(){
  //     this.mainStore.changeSchool()
  //   },
    t(){
      this.$router.push('/UserManage')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.a{

}
</style>
