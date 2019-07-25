<template>
  <el-row class="b-content bg-f box-s1 pd-20">
    <el-col class="fz30 fw-600 mb-20 text-c c-333">{{article.title}}</el-col>
    <el-col class="fz16 c-666 text-c">作者：{{article.author}} <span class="ml-20">发表时间：{{article.date | formateDate}}</span> </el-col>
    <el-col v-html="article.content" class="c-666 lh-2"></el-col>
  </el-row>
</template>


<script>
export default {
  layout:'blog',
  async asyncData ({app,query}) {
    const { data } = await app.$axios.get('http://localhost:3001/v1/detail'+'?id='+query.id)
    return { article:data.data}
  },
}
</script>

<style lang="less">
.b-content {
  margin: 20px 100px;
  padding-top: 50px;
}
</style>
