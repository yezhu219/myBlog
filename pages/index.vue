<template>
  <div class="container bg-f6 ">
    <el-row :gutter="20">
      <el-col :span="17" ><b-article v-for="item in list" :key="item._id" :article="item"></b-article></el-col>
      <el-col :span="7" ><p class="bg-f">class="bg-f"</p></el-col>
    </el-row>
  </div>
</template>

<script>
import bArticle from "@/components/b-article";
export default {
  layout: "blog",
  components: {
    bArticle
  },
  data() {
    return {
      
    }
  },
  async asyncData({$axios}) {
    const {data} = await $axios.get('http://localhost:3000/v1/articleList')
    console.log(data.list,data.count)
    return { list: data.list,count:data.count }
  },
};
</script>

<style lang="less">
.container {
  // padding-top: 20px;
  padding: 20px 50px;

}
</style>
