<template>
  <div class="blog bg-fc">
    <b-header></b-header>
    <nuxt />
    <b-footer></b-footer>
  </div>
</template>

<script>
import bHeader from '@/components/b-header'
import bFooter from '@/components/b-footer'
export default {
  components: {
    bHeader,
    bFooter
  }
}
</script>

<style lang="less">
.blog {
  width: 100%;
  height: 100px;
}

</style>
