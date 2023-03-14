<template>
    <div class="prod" v-for="i in data" :key="i">
        <div class="imagebox"><img :src="require(`@/assets/image/${i['img']}.png`)" alt=""></div>
        <div class="imageintro">
            <p class="child">{{i['name']}}</p>
            <p class="child">{{i['descr']}}</p>
            <a class="child" :href="i['url']">{{i['url']}}</a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'MoreView',
  component:{

  },
  setup(){
    const data = [{url:'https://tangtang1b1b.github.io/chayuan/',name:'茶苑CHAYUAN',descr:'個人購物網站',img:'1'},
                {url:'https://tangtang1b1b.github.io/DigiSalad/',name:'沙拉互動',descr:'沙拉互動測驗',img:'2'},
                {url:'https://tangtang1b1b.github.io/Global-Digital-test/',name:'寰宇數位',descr:'寰宇數位測驗',img:'3'},
                {url:'https://tangtang1b1b.github.io/todolist/todolistagain/index.html',name:'TodoList',descr:'TodoList實作',img:'4'},
                {url:'https://tangtang1b1b.github.io/Sliding-puzzle-game/',name:'九宮格拼圖',descr:'拼圖小遊戲實作',img:'5'},
                {url:'https://tangtang1b1b.github.io/chayuan/',name:'茶苑CHAYUAN',descr:'個人購物網站',img:'1'},
                {url:'https://tangtang1b1b.github.io/DigiSalad/',name:'沙拉互動',descr:'沙拉互動測驗',img:'2'}];
    
    return{
        data,
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main.scss";

.prod{
    background-color: $body_color;
    border-bottom: 1px solid #333;
    margin: auto;
    padding: 50px 0px;
    display: flex;
    width: 100%;
    .imagebox{
        width: 100%;
        img{
            width: 50%;
            border-radius: 10px;
            box-shadow: 0px 0px 5px rgba(#333,0.5);
        }
    }
    .imageintro{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .child{
            margin: 10px 0px;
        }
        .child:nth-child(1){
            font-size: 26px;
            font-weight: bold;
        }
    }
}
</style>
