<template>
  <el-container class="b-article bg-f pd-10">
    <el-aside width="250px" v-if="article.desImg">
      <img :src="article.desImg">
    </el-aside>
    <el-main>
      <el-row>
        <el-col>{{article.title}}</el-col>
        <el-col>{{article.des}}</el-col>
        <el-col>
          <el-row>
            <el-col>{{article.createTime}}</el-col>
            <el-col>{{article.view}}</el-col>
            <el-col>{{article.like}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'b-article',
  props:{
    article:{
      type:Object,
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less">
.b-article {

}
</style>