<template>
  <div class="home">
    <Banner/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    About,
    Footer,
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
  }
</style>
