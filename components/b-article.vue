<template>
  <el-container class="b-article bg-f pd-20 mb-20">
    <el-aside width="250px" v-if="article.desImg">
      <img :src="article.desImg" />
    </el-aside>
    <el-main>
      <el-row>
        <el-col class="fz22 lh-1 c-666 mb-20 fw-600">{{article.title}}</el-col>
        <el-col class="fz14 lh-1 c-666 mb-20">{{article.des}}</el-col>
        <el-col>
          <el-row class="article-info">
            <el-col :span="6" class="fz12 c-666">{{article.date | formateDate}}</el-col>
            <el-col :span="2" class="fz12 c-666">
              <i class="el-icon-view fz16 adjust"></i>
              {{article.view}}
            </el-col>
            <el-col :span="2" class="fz12 c-666">
              <i class="el-icon-xin1 fz16 adjust"></i>
              {{article.like}}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'b-article',
  props: {
    article: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    formatTime(date = new Date(), pattern = 'Y/M/D') {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      return pattern
        .replace('Y', year)
        .replace('M', formatNumber(month))
        .replace('D', formatNumber(day))
        .replace('H', formatNumber(hour))
        .replace('m', formatNumber(minutes))
        .replace('S', formatNumber(seconds))
    }
  },
  filters: {
    formateDate(val) {
      let date = new Date(val)
      var Y = date.getFullYear() + '-'
      var M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() 
      h= h<10?'0'+h+':':h+":"
      var m = date.getMinutes() 
      m= m<10?'0'+m+':':m+":"
      var s = date.getSeconds()
      s= s<10?'0'+s:s
      return Y + M + D + h + m + s
    }
  }
}
</script>

<style lang="less">
.b-article {
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .article-info {
    height: 20px;
    line-height: 20px;
  }
  .adjust {
    position: relative;
    top: 1px;
  }
}
</style>