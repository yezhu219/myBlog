<template>
  <el-row class="b-card box-s1 bg-f pd-20 text-c">
   <el-col class="fz22 c-333  mb-20 text-l">我的名片</el-col>
   <el-col ><img src="../assets/images/img/my.jpg" alt="汪兵" class="my" title="汪兵"></el-col>
   <el-col class="c-666 mb-20">Web前端工程师</el-col>
   <el-col class="c-666 fz12 mb-10 text-l lh-2">
     <p>项目地址：https://github.com/yezhu219/myBlog.git</p>
     <p>项目后台：https://github.com/yezhu219/blog-admin.git</p>
     <p>项目接口：https://github.com/yezhu219/myBlog.git</p>
   </el-col>
    <el-row>
      <el-col :span="8" title="yezhu219"><i class="el-icon-weixin fz30"></i></el-col>
      <el-col :span="8" title="348821387"><i class="el-icon-qq fz30"></i></el-col>
      <!-- <el-col :span="8" title="bing2619@163.com"><a href="mailto:bing2619@163.com"><i class="el-icon-youxiang fz30" ></i></a></el-col> -->
      <el-col :span="8" title="bing2619@163.com">
        <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=l6Sjr6_lpqSvoNfm5rn0_Po" ><i class="el-icon-youxiang fz30" ></i></a>
      </el-col>
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