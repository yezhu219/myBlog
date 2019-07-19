<template>
  <el-row class="b-card box-s1 bg-f pd-20 text-c">
   <el-col class="fz22 c-333  mb-20 text-l">我的名片</el-col>
   <el-col ><img src="../assets/images/img/my.jpg" alt="汪兵" class="my" title="汪兵"></el-col>
   <el-col class="c-666 mb-20">Web前端工程师</el-col>
   <el-col class="c-666 fz14 mb-10  lh-2">个人BLOG使用Nuxt搭建前端页面<br>Vue+Element搭建后台管理系统<br>服务器使用Node+Koa+mongoDB</el-col>
    <el-row>
      <el-col :span="8" title="yezhu219"><i class="el-icon-weixin fz30"></i></el-col>
      <el-col :span="8" title="348821387"><i class="el-icon-qq fz30"></i></el-col>
      <el-col :span="8" title="bing2619@163.com"><i class="el-icon-youxiang fz30" ></i></el-col>
    </el-row>
 </el-row>
</template>

<script>
export default {
  
}
</script>


<style lang="less">
  .b-card {
    .my {
      height: 100px;
      border-radius: 15px;
      margin-bottom: 20px;
    }
  }
</style>