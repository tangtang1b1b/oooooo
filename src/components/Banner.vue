<template>
    <div class="banner">
        <div class="nextcir"></div>
        <div class="word">
            <div class="title tick">
                <h2>Keep reading,<br> and go with the flow</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum eos, laudantium corporis iste ut natus eum inventore, totam explicabo necessitatibus esse voluptates rem. Ipsum labore aspernatur voluptates id necessitatibus?</p>
                <router-link to="/more" class="view tick">View more</router-link>
            </div>
            <div class="read"></div>
        </div>
        <div class="item tick">
            <div id="next" class="next tick" @click="right" @mouseenter="mouse" @mouseleave="mousel">next</div>
            <div class="thingbox">
                <div v-for="i in data" :key="i" class="thing">
                    <div class="imag">
                        <a :href="i['url']"><img :src="require(`@/assets/image/${i['img']}.png`)" alt=""></a>
                    </div>
                    <p>{{i['name']}}</p>
                    <div class="gone">
                        <p>{{i['descr']}}</p>
                        <div class="plus">
                            <a class="tick" :href="i['url']"><i class="fa-solid fa-barcode"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        const data = [{url:'https://tangtang1b1b.github.io/chayuan/',name:'茶苑CHAYUAN',descr:'個人購物網站',img:'1'},
                      {url:'https://tangtang1b1b.github.io/DigiSalad/',name:'沙拉互動',descr:'沙拉互動測驗',img:'2'},
                      {url:'https://tangtang1b1b.github.io/Global-Digital-test/',name:'寰宇數位',descr:'寰宇數位測驗',img:'3'},
                      {url:'https://tangtang1b1b.github.io/todolist/todolistagain/index.html',name:'TodoList',descr:'TodoList實作',img:'4'},
                      {url:'https://tangtang1b1b.github.io/Sliding-puzzle-game/',name:'九宮格拼圖',descr:'拼圖小遊戲實作',img:'5'},
                      {url:'https://tangtang1b1b.github.io/chayuan/',name:'茶苑CHAYUAN',descr:'個人購物網站',img:'1'},
                      {url:'https://tangtang1b1b.github.io/DigiSalad/',name:'沙拉互動',descr:'沙拉互動測驗',img:'2'}];
        let i = 1;
        let check = true;
        const right=()=>{
            const thingbox = document.querySelector(".thingbox");
            if(i<data.length-1){
                thingbox.style = `transition: transform 0.5s 0.1s ease-in-out;transform: translateX(-${(100/7)*i}%)`;
                i++;
                if(check==true){
                    growred();
                }else{
                    growyellow();
                }
                if(i==data.length-1){
                    setTimeout(()=>{
                        i=0;
                        thingbox.style = `transform: translateX(-${(100/7)*i}%)`;
                        thingbox.style = "transition: 0s";
                        i=1;
                    },700)
                }
            }
        }
        const growyellow=()=>{
            check=!check;
            const nextcir = document.querySelector(".nextcir");
            const banner = document.querySelector(".banner");
            const tick = document.querySelectorAll(".tick");
            tick.forEach(v=>{
                v.style="transition: border 1s,color 1s,transform 0.3s ,box-shadow 0.3s";
                v.classList.remove("white")
            });
            nextcir.style = "transition: 1s ease-in-out;background-color: #edc7af;width: 10px;height: 10px;transform: translate(-200%,-200%) scale(500)";
            setTimeout(()=>{
                banner.style = "background-color: #edc7af";
                nextcir.style = "background-color: #edc7af;transition: 0s;width: 0px;height: 0px;transform: translate(-200%,-200%) scale(0)";
            },1000);
        }
        const growred=()=>{
            check=!check;
            const nextcir = document.querySelector(".nextcir");
            const banner = document.querySelector(".banner");
            const tick = document.querySelectorAll(".tick");
            tick.forEach(v=>{
                v.style="transition: border 1s,color 1s, transform 0.3s ,box-shadow 0.3s";
                v.classList.add("white")
            });
            nextcir.style = "transition: 1s ease-in-out;background-color: #a82224;width: 10px;height: 10px;transform: translate(-200%,-200%) scale(500)";
            setTimeout(()=>{
                banner.style = "background-color: #a82224";
                nextcir.style = "background-color: #a82224;transition: 0s;width: 0px;height: 0px;transform: translate(-200%,-200%) scale(0)";
            },1000);
        }
        const mouse=()=>{
            const next = document.querySelector("#next");
            if(check==true){
                next.style="background-color: #a82224;color: #fff;";
            }else{
                next.style="background-color: #edc7af;color: #333;border: solid 1px #333";
            }
        }
        const mousel=()=>{
            const next = document.querySelector("#next");
            if(check==true){
                next.style="background-color: #edc7af";
            }else{
                next.style="background-color: #a82224";
            }
        }
        return{
            right,
            growred,
            growyellow,
            mouse,
            mousel,
            data,
        }
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main.scss";

*{
    // outline: solid 1px;
    font-family: 微軟正黑體;
}
.banner{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: $body_color;
    color: #333;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    .nextcir{
        z-index: 0;
        position: absolute;
        left: 84%;
        top: 13%; 
        transform-origin: 50% 50%;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1px;
        height: 1px;
        transition: 1s ease-in-out;
        // box-shadow: 0px 0px 15px rgba(#333,0.2);
    }
    .word{
        width: 50%;
        height: 100%;
        padding: 0px 20px;
        box-sizing: border-box;
        z-index: 1;
        .read{
            width: 100%;
            height: 30%;
        }
        .title.tick.white{
            color: #fff;
        }
        .title.tick{
            color:#333;
        }
        .title{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 70%;
            h2{
                margin-bottom: 30px;
                text-align: left;
                font-size: 90px;
                font-weight: bold;
            }
            p{
                font-weight: bold;
                margin-bottom: 30px;
                letter-spacing: 1.5px;
                line-height: 20px;
                text-align: left;
            }
            .view.tick.white{
                color: #fff;
                box-shadow: 0px 0px 0px #fff;
                border: solid 1px #fff;
                &:hover{
                    transform: translate(-2px,-1px);
                    cursor: pointer;
                    box-shadow: 3px 2px 0px #fff;
                }
                &:active{
                    transform: translate(0px,0px);
                    box-shadow: 0px 0px 0px #fff;
                }
            }
            .view.tick{
                color: #333;
                box-shadow: 0px 0px 0px #333;
                border: solid 1px #333;
            }
            .view{
                text-decoration: none;
                width: fit-content;
                font-size: 28px;
                background-color: transparent;
                border-radius: 30px;
                margin-left: 20px;
                padding: 5px 20px;
                box-sizing: border-box;
                position: relative;
                z-index: 1;
                transition: 0.3s;
                &:hover{
                    transform: translate(-2px,-1px);
                    cursor: pointer;
                    box-shadow: 3px 2px 0px #333;
                }
                &:active{
                    transform: translate(0px,0px);
                    box-shadow: 0px 0px 0px #333;
                }
            }
        }
    }
    .item.tick.white{
        color: #fff;
    }
    .item.tick{
        color: #333;
    }
    .item{
        box-sizing: border-box;
        padding-top: 50px;
        width: 50%;
        height: 100%;
        overflow: hidden;
        position: relative;
        .next.tick.white{
            border: solid 1px #fff;
            color: #fff;
        }
        .next.tick{
            border: solid 1px #333;
            color: #333;
        }
        .next{
            z-index: 1;
            position: absolute;
            left: 70%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            i{
                font-size: 24px;
                color: #fff;
                transition: 0.3s;
            }
            &:hover{
                cursor: pointer;
                color: #fff;
                background-color: $red_color;
                border: solid 1px $red_color; 
            }
        }
        .thingbox{
            display: flex;
            width: 490%;
            height: 100%;
            // transition: 0.5s;
            .thing{
                box-sizing: border-box;
                padding: 20px;
                width: 70%;
                height: 100%;
                padding: 20px 40px;
                box-sizing: border-box;
                .imag{
                    height: 85%;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0px 0px 8px rgba(#333,0.5);
                    img{
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: 1s;
                        &:hover{
                            transform: scale(1.03);
                        }
                    }
                }
                p{
                    font-weight: bold;
                    font-size: 26px;
                    height: 7.5%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .gone{
                    height: 7.5%;
                    display: flex;
                    align-items: center;
                    p{
                        height: 100%;
                        width: 80%;
                        display: flex;
                        justify-content: flex-start;
                        padding: 10px;
                        box-sizing: border-box;
                        font-size: 16px;
                    }
                    .plus{
                        width: 20%;
                        a.tick.white{
                            color: #fff;
                        }
                        a.tick{
                            color: #333;
                            transition: 0.3s;
                            &:hover{
                                color: blueviolet;
                            }
                            i{
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>