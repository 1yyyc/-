<template>
  <div style="position: relative">
    <div style=" position: absolute">
      <div class="left">
        <div class="left_top">
          <select class="select_model"
                  name="model" id="model"
                  onchange="">
            <option   value="" selected>选择模型</option>
          </select>
          <select class="select_weight"
                  name="weight" id="weight"
                  onchange="">
            <option class="u45_input_option"  value="选择权重文件">选择权重</option>

          </select>

          <table class="model_data">
            <tr>
              <td>模型名称：</td>
              <td>Name</td>
              <td>模型类型：</td>
              <td>Type</td>
            </tr>
            <tr>
              <td>模型作者：</td>
              <td>Author</td>
              <td>模型作用：</td>
              <td>Describe</td>
            </tr>
          </table>

        </div>
        <!-- 左下图像检测区域 -->
        <div class="left_bottom">
          <!-- 文件上传区域 -->
          <div class="upload_img">
            <!-- 拖拽上传 -->
            <div style="overflow-y: scroll; border: 3px dashed #2196F3; border-radius: 10px; width: 560px; margin-left: -17px;">
              <div class="uploader">
                <div>
                  <i class="fa fa-cloud-upload"></i>
                  <el-upload action="#" list-type="picture-card" :auto-upload="false">
                    <el-icon><Plus /></el-icon>

                    <template #file="{ file }">
                      <div>
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                        <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
          >
            <el-icon><Download /></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
                      </div>
                    </template>
                  </el-upload>
                  <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                  </el-dialog>
                </div>
              </div>
            </div>
          </div>

          <div style="padding: 1% 40%;">
            <button class="exam_btn" style="margin: auto; cursor: pointer;position: absolute;top: 300px;left: 254px">
              测试图像
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="right_outside">
        <div class="right_inside">
          <div class="img_container">
            <!-- 存放图片 -->
          </div>
          <div>
            <button class="last_page">
              上一张
            </button>
            <button class="next_page">
              下一张
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
export default {
  name:'fenlei',
  components:{Delete,Download,Plus,ZoomIn},
  setup(){
    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)
    const disabled = ref(false)

    const handleRemove = (file) => {
      file.url = " "
    }

    const handlePictureCardPreview = (file) => {
      dialogImageUrl.value = file.url
      dialogVisible.value = true
    }

    const handleDownload = (file) => {
      console.log(file)
    }

    return{
      disabled,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
      dialogVisible,
      dialogImageUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.Select_file{
  position: absolute;
  left: 225px;
  top: 15px;
}
.left{
  width: 45%;
  height: 650px;
  margin-left: 12px;
  position: relative;
  left: 10px;
  float: left;
}
.left_top{
  width: 585px;
  height: 210px;
  margin-left: 2px;
  border: 2px solid #2196F3;
  border-radius: 10px;
  position: absolute;
  top: 10px;
}

.left_bottom{
  width: 585px;
  height: 400px;
  border: 2px solid #2196F3;
  border-radius: 10px;
  margin-top: 10px;
  position: absolute;
  top: 223px;
}

.right_outside{
  width: 55%;
  margin-right: 20px;
  height: 620px;
  margin-left: 625px;
  margin-top: 10px;
}

.right_inside{
  width: 600px;
  height: 620px;
  border: #2196F3 solid;
  border-radius: 10px;
}

.exam_btn{
  background-color: rgb(64, 158, 255);
  width: 100px;
  height: 35px;
  border-radius: 4px;
  color: white;
  font-size: 15px;
}

.exam_btn:hover{
  background-color: rgb(121, 187, 255);
}

.upload_img{
  width: 530px;
  height: 330px;
  margin: 0 auto;
  /* border: 1px solid #7688a9;  */
  border-radius: 10px;
  margin-top: 1%;
  /* background-color: #4e678a; */
}

.select_model{
  width: 140px;
  height: 40px;
  border-radius: 4px;
  font-size: 19px;
  text-align: center;
  margin-top: 20px;
}

.select_weight{
  width: 140px;
  height: 40px;
  border-radius: 4px;
  font-size: 19px;
  text-align: center;
  margin-top: 20px;
  margin-left: 110px;
}

.model_data{
  margin: 0 auto;
  margin-top: 50px;
  width: 500px;
  height: 40px;
  font-size: 20px;
  border: none;
}

.img_container{
  margin: 0 auto;
  margin-top: 30px;
  width: 500px;
  height: 510px;
  border: 2px #03A9F4 dashed ;
  border-radius: 10px;
}

.last_page{
  margin-top: 30px;
  background-color: rgba($color: #000000, $alpha: 0);
  color: #2196F3;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
}
.last_page:hover{
  color: #6bc2eb;
}

.next_page{
  margin-top: 30px;
  margin-left: 160px;
  background-color: rgba($color: #000000, $alpha: 0);
  color: #2196F3;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
}
.next_page:hover{
  color: #6bc2eb;
}
.uploader {
  width: 100%;
  height: 160px;
  // margin: 0 auto;
  color: #2196f3;
  padding: 40px 15px;
  text-align: center;
  position: relative;
  background-color: #fff;

  &.dragging {
    background: #fff;
    color: #2196F3;
    border: 3px dashed #2196F3;

    .file-input label {
      background: #2196F3;
      color: #fff;
    }
  }

  i {
    font-size: 30px;
  }

  .file-input {
    width: 200px;
    margin: auto;
    height: 68px;
    position: relative;

    label,
    input {
      background: #fff;
      color: #2196F3;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      border-radius: 4px;
      margin-top: 7px;
      cursor: pointer;
    }

    input {
      opacity: 0;
      z-index: -2;
    }
  }

  .images-preview {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .img-wrapper {
      width: 160px;
      display: flex;
      flex-direction: column;
      margin: 10px;
      height: 150px;
      justify-content: space-between;
      background: #fff;
      box-shadow: 5px 5px 20px #3e3737;

      img {
        max-height: 105px;
      }
    }

    .details {
      font-size: 12px;
      background: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      padding: 3px 6px;

      .name {
        overflow: hidden;
        height: 18px;
      }
    }
  }

  .upload-control {
    position: absolute;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 10px;
    padding-bottom: 4px;
    text-align: right;

    button, label {
      background: #2196F3;
      border: 2px solid #03A9F4;
      border-radius: 3px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
    }

    label {
      padding: 2px 5px;
      margin-right: 10px;
    }
  }
}
</style>