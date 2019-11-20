<template>
  <el-row class="b-content bg-f box-s1 pd-20">
    <el-col class="fz30 fw-600 mb-20 text-c c-333">{{article.title}}</el-col>
    <el-col class="fz16 c-666 text-c">作者：{{article.author}} <span class="ml-20">发表时间：{{article.date | formateDate}}</span> </el-col>
    <el-col  class="c-666 lh-2">
      <div v-html="content"></div>
      <h1>abgc</h1>
    </el-col>
  </el-row>
</template>

<script>
import marked from 'marked'

export default {
  layout:'blog',
  data() {
    return {
     
    }
  },
  async asyncData ({app,query}) {
    const { data } = await app.$axios.get('http://localhost:3001/v1/detail'+'?id='+query.id)
    let content =  marked(data.data.content)
    return { article:data.data,content}
  },
}
</script>

<style lang="less">
.b-content {
  margin: 20px 100px;
  padding-top: 50px;
}
</style>
