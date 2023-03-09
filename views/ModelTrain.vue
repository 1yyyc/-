<template>
  <div style="position: relative">
    <div id="u265" class="ax_default _形状">
      <input @click="isShowDialog=true" type="button" name="Name"  value="添加训练任务" id="u265-1" style="cursor:pointer;position:absolute;left:-150px;top:0px;border-radius: 2px;">
    </div>


    <div id="u267" class="ax_default _形状">
      <input type="text" name="Name"  placeholder=" 请输入名称查询" id="taskName" style="height: 25px;width: 180px">
    </div>
    <div id="u274" class="ax_default _文本段落">
      <p><span style="text-decoration:none;position:absolute;left:-150px;top:1px;">模型训练</span></p>
    </div>
    <div id="u275" class="ManageTable">
      <table id="u275-1" border="1" style="border-collapse: collapse " class="table table-bordered">
        <thead>
        <tr>
          <th style="display: none;">任务ID</th>
          <th style="text-align: center; ">任务名称</th>
          <th style="text-align: center;">模型名称</th>
          <th style="text-align: center;">数据集名称</th>
          <th style="text-align: center;">任务描述</th>
          <th style="text-align: center;">运行状态</th>
          <th style="text-align: center;">操作</th>
        </tr>
        </thead>
        <tbody id="tbody" >
        <tr>
          <td style="display: none;"></td>
        </tr>
        </tbody>
      </table>
      <div>
        <el-dialog v-model="isShowDialog" title="新增">
          <el-divider style="position: relative;top: -30px"></el-divider>
          <div style="display: inline">
            <p class="txt3">权重名称：</p>
            <el-input  class="ipt1" style="width: 30%" placeholder="" />
            <p class="txt3">任务名称：</p>
            <el-input  class="ipt1" style="width: 30%" placeholder="" />
            <p class="txt3">选择模型：</p>
            <el-select  v-model="value1" class="ipt1" placeholder="">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
            <div style="display: inline" >
              <p class="txt5">权重描述：</p>
              <el-input  class="ipt2" style="width: 30%" placeholder="" />
              <p class="txt4">任务描述：</p>
              <el-input  class="ipt3" style="width: 30%" placeholder="" />
              <p class="txt6">选择数据集：</p>
              <el-select style="width: 30%"  v-model="value" class="ipt4" placeholder="">
                <el-option
                    v-for="item in optionss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <!--    <div>-->
          <!--        <p class="txt4">任务名称：</p>-->
          <!--        <el-input  class="ipt1" style="width: 30%" placeholder="" />-->
          <!--    </div>-->
          <!--          <p class="txt4">选择模型：</p>-->
          <!--          <el-select  v-model="value" class="ipt1" placeholder="">-->
          <!--            <el-option-->
          <!--                v-for="item in options"-->
          <!--                :key="item.value"-->
          <!--                :label="item.label"-->
          <!--                :value="item.value"-->
          <!--            />-->
          <!--          </el-select>-->
          <!--        <div>-->
          <!--          <p class="txt5">权重描述：</p>-->
          <!--          <el-input  class="ipt2" style="width: 30%" placeholder="" />-->
          <!--        </div>-->
          <el-divider style="position: relative;top: -50px"></el-divider>
          <el-button @click="isShowDialog=false" type="default">关闭</el-button>
          <el-button @click="" type="primary">提交</el-button>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import "@/plug-in/css/newcss/xunlian1.css"
import { ref } from 'vue'

const value = ref('')
export default {
  name: "ModelTrain",
  data(){
    return {
      value:"",
      value1:"",
      isShowDialog:false,
      optionss:[{
          value: '乳腺癌',
          label: '乳腺癌',
        },
        {
          value: '新冠肺炎',
          label: '新冠肺炎',
        },
        {
          value: 'CNV',
          label: 'CNV',
        },
        {
          value: '乳腺癌2',
          label: '乳腺癌2',
        },
        {
          value: 'CNV分割',
          label: 'CNV分割',
        }
      ],
      options:[{
        value: 'VGGNet',
        label: 'VGGNet',
      },
        {
          value: 'Unet',
          label: 'Unet',
        },
        {
          value: 'FPN',
          label: 'FPN',
        },
        {
          value: 'ResNet',
          label: 'ResNet',
        }
      ]
    }
  }
}
</script>

<style scoped>
th {
  height: 40px;
}
.txt3{
  position: relative;
  left: -300px;
  top: -30px;
}
.txt4{
  position: absolute;
  left: 400px;
  bottom: 257px;
}
.txt5{
  position: absolute;
  left: 400px;
  bottom: 334px;
}
.txt6{
  position: absolute;
  left: 400px;
  bottom: 174px;
}
.ipt1{
  position: relative;
  left: -140px;
  top: -70px;
}
.ipt2{
  position: absolute;
  left: 490px;
  bottom: 340px;
}
.ipt3{
  position: absolute;
  left: 490px;
  bottom: 262px;
}
.ipt4{
  position: absolute;
  left: 490px;
  bottom: 180px;
}
</style>