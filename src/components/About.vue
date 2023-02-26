<template>
    <div class="about">
        <!-- <img :src="require(`@/assets/image/king.jpg`)" alt=""> -->
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main.scss";
.about{
    width: 100%;
    height: 100vh;
    background-color: $red_color;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
}
</style>