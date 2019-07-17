<template>
  <el-container class="b-article pd-10">
    <el-aside width="250px">1</el-aside>
    <el-main>
      <el-row>
        <el-col>title</el-col>
        <el-col>des</el-col>
        <el-col>
          <el-row>
            <el-col>classify</el-col>
            <el-col>time</el-col>
            <el-col>view</el-col>
            <el-col>like</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'b-article',
  data() {
    return {
      article: {
        title: '',
        des: ''
      }
    }
  }
}
</script>

<style lang="less">
.b-article {
  background-color: #ccc;
}
</style>