<template>
  <div class="container bg-f6 ">
    <el-row :gutter="20">
      <el-col :span="18" ><b-article v-for="item in list" :key="item._id" :article="item"></b-article></el-col>
      <el-col :span="6" >
        <el-row :gutter="20">
          <el-col class="mb-20"><b-card></b-card></el-col>
          <el-col class="mb-20"><b-join></b-join></el-col>
          <el-col><b-hot :data=list></b-hot></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bArticle from "@/components/b-article"
import bJoin from '@/components/b-join'
import bHot from '@/components/b-hot'
import bCard from '@/components/b-card'
export default {
  layout: "blog",
  components: {
    bArticle,
    bJoin,
    bHot,
    bCard
  },
  data() {
    return {
      
    }
  },
  async asyncData({$axios}) {
    console.log("++++++++++++++++++++++++++")
    const {data} = await $axios.get('http://localhost:3000/v1/articleList')
    return { list: data.list,count:data.count }
  },
};
</script>

<style lang="less">
.container {
  // padding-top: 20px;
  padding: 20px 60px;

}
</style>
