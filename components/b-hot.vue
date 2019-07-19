<template>
 <el-row class="b-hot box-s1 bg-f pd-20">
   <el-col class="fz22 c-333  mb-20">热门文章</el-col>
   <el-col >
     <a v-for="item in list" :key="item.id" class="text-ell">{{item.title}}</a>
   </el-col>
 </el-row>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
.b-hot {
 a {
   padding: 10px 0;
   border-bottom: 1px solid #f1f1f1;
 }
}
</style>