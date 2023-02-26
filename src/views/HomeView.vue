<template>
  <div class="home">
    <Banner/>
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    About,
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
  }
</style>
