<template>
  <div class="container">
    <b-article v-for="item in 5" :key="item"></b-article>
  </div>
</template>

<script>
import bArticle from "@/components/b-article";
export default {
  layout: "blog",
  components: {
    bArticle
  }
};
</script>

<style lang="less">
.container {
  padding-top: 20px;
}
</style>
