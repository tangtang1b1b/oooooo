<template>
    <div class="about">
        <img :src="require(`@/assets/image/king.jpg`)" alt="">
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.about{
    width: 100%;
    height: 100vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
}
</style>