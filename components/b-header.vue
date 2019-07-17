<template>
  <el-row class="b-header text-c fz24 c-666">
    <el-col :span="6" class="logo">
      <a href>
        <img src="../assets/images/img/logo.png" width="100%" alt="汪兵的BLOG" />
      </a>
    </el-col>
    <el-col :span="14" v-show="showNav">
      <el-row>
        <el-col :span="5">首页</el-col>
        <el-col :span="5">学习</el-col>
        <el-col :span="5">随笔</el-col>
        <el-col :span="5">分享</el-col>
        <el-col :span="4">关于我</el-col>
      </el-row>
    </el-col>
    <el-col :span="4" v-show="showNav">
      <i class="el-icon-search fz32 mr-10" @click="showNav=false"></i>
    </el-col>
    <el-col :span="10" v-show="!showNav" class="search">
      <el-row class="pr">
        <el-col :span="22">
          <input type="text" v-model="searchValue" placeholder="请输入搜索内容" class="c-666" />
          <i class="el-icon-close close fz30" @click="showNav=true"></i>
        </el-col>
        <el-col :span="2">
          <span class="fz18 btn-search bg-de">搜索</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'b-header',
  data() {
    return {
      showNav: true,
      searchValue: ''
    }
  },
  methods: {
    goSearch() {
      this.showNav = false
    }
  }
}
</script>

<style lang="less">
.b-header {
  height: 90px;
  line-height: 90px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  .logo {
    a {
      display: inline-block;
      img {
        vertical-align: middle;
      }
    }
  }
  i {
    position: relative;
    top: 3px;
  }
  .search {
    input {
      width: 100%;
      height: 40px;
      border: 1px solid #dedede;
      border-right: none;
      border-radius: 5px 0 0 5px;
      padding-left: 20px;
      box-sizing: border-box;
      &::placeholder {
        color: #999;
      }
    }
    .close {
      position: absolute;
      right: -60px;
      top: 50%;
      transform: translateY(-50%);
    }
    .btn-search {
      display: inline-block;
      position: relative;
      top: 2px;
      width: 100%;
      height: 37px;
      line-height: 37px;
      vertical-align: middle;
      border: 1px solid #dedede;
      border-radius: 0 5px 5px 0;
    }
  }
}
.changeColor {
  animation: change 5s linear infinite;
}

@keyframes change {
  250% {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }
  50% {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
  75% {
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  }
  100% {
    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  }
}
</style>