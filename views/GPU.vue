<template>
  <div style="position: relative">
    <div id="main"></div>
    <div id="main2"></div>
  </div>
  <div style="position: relative">
    <p style="position: absolute; top:400px;left: 30px;width: 100px"><strong>内存</strong></p>
    <p class="t1" style="left: 100px">服务器总内存</p>
    <p class="t1" style="left: 420px">已用内存</p>
    <p class="t1" style="left: 740px">剩余内存</p>
    <p class="t1" style="left: 1060px">使用率</p>
    <p class="t2" style="left: 60px">内存</p>
    <p class="t2" style="left: 180px">JVM</p>
    <p class="t2" style="left: 390px">内存</p>
    <p class="t2" style="left: 510px">JVM</p>
    <p class="t2" style="left: 700px">内存</p>
    <p class="t2" style="left: 820px">JVM</p>
    <p class="t2" style="left: 1036px">内存</p>
    <p class="t2" style="left: 1140px">JVM</p>
    <p class="t3" style="left: 40px;color: rgb(255,159,127)">15.7GB</p>
    <p class="t3" style="left: 180px;color: rgb(55,162,218)">613M</p>
    <p class="t3" style="left: 370px;color: rgb(255,159,127)">15.7GB</p>
    <p class="t3" style="left: 510px;color: rgb(55,162,218)">613M</p>
    <p class="t3" style="left: 680px;color: rgb(255,159,127)">15.7GB</p>
    <p class="t3" style="left: 820px;color: rgb(55,162,218)">613M</p>
    <p class="t3" style="left: 1010px;color: rgb(255,159,127)">15.7GB</p>
    <p class="t3" style="left: 1140px;color: rgb(55,162,218)">613M</p>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "GPU",
  mounted() {
    let myChart = echarts.init(document.getElementById('main'));
    let myChart2 = echarts.init(document.getElementById('main2'));
    let option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '系统CPU使用率' },
            { value: 735, name: '用户CPU使用率' },
            { value: 580, name: '当前CPU空闲率' },
            { value: 484, name: '其他' },
          ]
        }
      ]
    };
    let option2 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '系统CPU使用率' },
            { value: 735, name: '用户CPU使用率' },
            { value: 484, name: '其他' },
          ]
        }
      ]
    };
    myChart.setOption(option)
    myChart2.setOption(option2)
  }
}
</script>

<style scoped>
#main{
  height: 400px;
  width: 600px;
  position: absolute;
  top: 40px;
  left: 10px;
}
#main2{
  height: 400px;
  width: 600px;
  position: absolute;
  top: 40px;
  left: 700px;
}
.t1{
  position: absolute;
  top: 450px;
  width: 100px;
}
.t2{
  position: absolute;
  top: 500px;
  width: 50px;
}
.t3{
  position: absolute;
  top: 550px;
  width: 50px;
  font-size: 25px;
}
</style>