<template>
 <el-row class="b-hot box-s1 bg-f pd-20" >
   <el-col class="fz22 c-333  mb-20">热门文章</el-col>
   <el-col v-for="item in data" :key="item.id" class="lh-1 line-b">
     <a>{{item.title}}</a>
   </el-col>
 </el-row>
</template>

<script>
export default {
  props:{
    data:{
      type: Array
    }
  },
  data(){
    return {
      list:[]
    }
  },
}
</script>

<style lang="less">
.b-hot {
 a {
   display: inline-block;
   padding: 10px 0;
   cursor: pointer;
   &:hover {
     color: #333;
   }
 }
}
</style>