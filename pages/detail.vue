<template>
  <div>
    <h1>detail</h1>
    <div v-html="article.content"></div>
    <h2>{{article.title}}</h2>
  </div>
</template>


<script>
export default {
  layout:'blog',
  async asyncData ({app,query}) {
    console.log(query.id,2222)
    const { data } = await app.$axios.get('http://localhost:3000/v1/detail'+'?id='+query.id)
    console.log(data,"------------------------+++++++=")
    return { article:data.data}
  },
}
</script>

<style lang="less">

</style>
