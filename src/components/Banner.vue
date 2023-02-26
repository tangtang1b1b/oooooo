<template>
    <div class="banner">
        <img :src="require(`@/assets/image/king.jpg`)" alt="大圖">
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.banner{
    width: 100%;
    height: 100vh;
    background-color: #333;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
}
</style>