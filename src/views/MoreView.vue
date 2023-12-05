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
    const data = 
        [
            {url:'https://czchat.onrender.com',name:'線上即時聊天室',descr:'運用 Socket.io 實現即時聊天',img:'6'},
            {url: "https://tangtang1b1b.github.io/vite-three-gsap---landing-page/",name: "vite + three + gsap - DeSK--",descr: "使用 vite + three + gsap 做一個 landing page",img: "12",},
            {url: "https://tangtang1b1b.github.io/pokemon-book/",name: "vite + pinia - Pokemonbook",descr: "使用 vite + pinia 做一個神奇寶貝圖鑑",img: "11",},
            {url: "https://tangtang1b1b.github.io/vite-pinia-Todo-List/",name: "vite + pinia - TodoList",descr: "使用 vite + pinia 做一個 todoList",img: "10"},
            {url:'https://tangtang1b1b.github.io/panorama/',name:'360 還景功能',descr:'three.js 實作還景(手機觀看)',img:'7'},
            {url:'https://tangtang1b1b.github.io/weather-api/',name:'天氣 API',descr:'串接一周天氣圖片呈現',img:'8'},
            {url:'https://tangtang1b1b.github.io/chayuan/',name:'茶苑 CHAYUAN',descr:'個人購物網站',img:'1'},
            {url:'https://tangtang1b1b.github.io/Sliding-puzzle-game/',name:'九宮格拼圖',descr:'拼圖小遊戲實作',img:'5'},
            {url:'https://tangtang1b1b.github.io/Tic-Tac-Toe/',name:'井字遊戲',descr:'圈圈叉叉小遊戲',img:'9'},
            {url:'https://tangtang1b1b.github.io/DigiSalad/',name:'沙拉互動',descr:'沙拉互動切版',img:'2'},
            {url:'https://tangtang1b1b.github.io/Global-Digital-test/',name:'寰宇數位',descr:'寰宇數位切版',img:'3'},
            {url:'https://tangtang1b1b.github.io/todolist/todolistagain/index.html',name:'TodoList',descr:'TodoList 實作',img:'4'},
        ];
    
    return{
        data,
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main.scss";
@mixin phone(){
    @media screen and ( max-width: 1200px ){
        @content
    }
}
.prod{
    background-color: $body_color;
    border-bottom: 1px solid #333;
    margin: auto;
    padding: 50px 0px;
    display: flex;
    width: 100%;
    @include phone{
        box-sizing: border-box;
        flex-direction: column;
        padding: 10px 10px;
    }
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
        @include phone{
            width: 100%;
        }
        .child{
            margin: 10px 0px;
        }
        .child:nth-child(1){
            font-size: 26px;
            font-weight: bold;
        }
        .child:nth-child(3){
            word-wrap: break-word;
        }
    }
}
</style>
