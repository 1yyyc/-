<template class="body">
  <div class="row" style="width: 100%;position: fixed;top: 1px" id="row1">
    <div id="u168" style="position: fixed;left: 3%;top: 2%;">
      <img id="u168_img" src="@/plug-in/img/u168.svg"/>
      <p><span  style="position: fixed;top: 2.1%;left: 3.2%;color: white">AI</span></p>
    </div>
    <div id="u165" class="col-md-2" style="left: 4%;">
      <p><span style="color: #00868B;position: fixed;top: 2.1%;left: 4.8%;" >医学影像平台</span></p>
    </div>
    <div id="u166" class="col-md-2" style="left: -4%;">
      <div id="u166_text" class="text ">
        <router-link to="/" style="text-decoration:none; color: black;position: fixed;top: 2%;left: 12.8%;">首页</router-link>
      </div>
    </div>

    <div id="u167" class="col-md-1" style="left: -8%;">
      <div id="u167_text" class="text " >
        <router-link to="/UserManage" style="text-decoration:none; color: black;position: fixed;top: 2%;left: 16.8%;">后台管理</router-link>
      </div>
    </div>
    <div id="u178" class="col-md-1" style="left: -10%;">
      <select id="u178_input" class="u178_input" style="border:0;color: black;position: fixed;top: 2.30%;left: 22.8%; font-size: 16px">
        <option value="none" selected disabled>模型测试</option>
        <option class="u178_input_option" value="图像分类">图像分类</option>
        <option class="u178_input_option" value="图像分割">图像分割</option>
        <option class="u178_input_option" value="图像检测">图像检测</option>
      </select>
    </div>
    <div id="u175" class="col-md-1" style="left: -11%;">
      <div id="u175_text" class="text ">
        <router-link to="/UserManage/ModelTrain" style="text-decoration:none; color: black;position: fixed;top: 2.0%;left: 29.8%;">模型训练</router-link>
      </div>
    </div>
    <div id="u176" class="col-md-1" style="left: -13%;">
      <div id="u176_text" class="text ">
        <router-link to="/GPU" style="text-decoration:none; color: black;position: fixed;top: 2.0%;left: 35.8%;">GPU信息</router-link>
      </div>
    </div>
    <div id="u174"  style="position:fixed;right: 7.3%; top: 2.0%">
      <img id="u174_img" class="img " src="@/plug-in/img/u174.png" style="width: 85%;"/>
    </div>
    <div id="u172" class="" style="">
      <button type="button" class="u178_input"  style="  letter-spacing: 0;border:2px;position:fixed;right: 3%;top: 2.5%; color: #0c1326;background: white" onclick="">退出登录</button>
    </div>
  </div>
  <div class="row" >
    <div class="col-md-3">
      <div class="first">
        <p class="text2" style="color: #48D1CC;border-bottom: 1px solid #EE7600;height: 15%; width: 80%;">模型测试</p>
        <div class="picture">
          <img src="@/plug-in/img/20223719358.jpg" style="margin-left: 1%;margin-top: 6%;box-shadow: 3px 3px 10px #97FFFF;border-radius: 10px;">
        </div>
        <div class="bu">
          <button @click="isShowDialog=true" type="button" class="bt" data-toggle='modal'  data-dismiss="modal" data-target="#chose">立即使用</button>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="two">
        <p class="text2" style="color: #EE7600;border-bottom: 1px solid #87CEFA;height: 15%; width: 80%;">模型训练</p>
        <div class="picture">
          <img src="@/plug-in/img/12.jpg" style="margin-left: 1%;margin-top: 6%;box-shadow: 3px 3px 10px #97FFFF;border-radius: 10px;">
        </div>
        <div class="bu">
          <button type="button"  class="bt" id="btn2" @click="t">立即使用</button>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="three">
        <p class="text2" style="color: #EE6AA7;border-bottom: 1px solid #698B22;height: 15%; width: 80%;">GPU信息</p>
        <div class="picture">
          <img src="@/plug-in/img/13.jpg" style="margin-left: 1%;margin-top: 6%;box-shadow: 3px 3px 10px #97FFFF;border-radius: 10px;">
        </div>
        <div class="bu">
          <button @click="G" type="button"  class="bt" id="btn3">立即使用</button>
        </div>
      </div>
    </div>
    <div>
      <el-dialog v-model="isShowDialog" title="">
        <div style="display: inline-block;margin-right: 50px;margin-left: 10px;margin-bottom: 40px" class="box1">
          <img class="img100" src="@/plug-in/img/u150.svg" alt="">
          <br>
          <router-link to="/jiance" class="text1">图像检测</router-link>
        </div>
        <div style="display: inline-block;margin-right: 50px;margin-bottom: 40px" class="box1">
          <img class="img100" src="@/plug-in/img/u150.svg" alt="">
          <br>
          <router-link to="/fenge" class="text1">图像分割</router-link>
        </div>
        <div style="display: inline-block;margin-bottom: 40px" class="box1">
          <img class="img100" src="@/plug-in/img/u150.svg" alt="">
          <br>
          <router-link to="/fenlei" class="text1">图像分类</router-link>
        </div>
        <el-button class="bt1" @click="isShowDialog=false" type="primary">关闭</el-button>
      </el-dialog>
    </div>
  </div>
</template>


<script>

import "@/plug-in/css/newcss/shouye.css"
export default {
  name: "index",
  data(){
    return {
      isShowDialog:false
    }
  },
  methods:{
    t(){
      this.$router.push('/ModelTrain')
    },
    G(){
      this.$router.push('/GPU')
    }
  }
}
</script>

<style scoped>
.box1{
  width: 170px;
  height: 170px;
  border-style: solid;
  border-width: 2px;
  border-radius: 12px;
}
.bt1{
  width: 126px;
  position: relative;
  left: 9px;
  top: 4px;
}
.img100{
  width: 140px;
  height: 110px;
  margin-top: 25px;
}
.text1{
  color: #55aaff;
  font-size: 16px;
  text-decoration: none;
}
</style>