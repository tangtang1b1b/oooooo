<template>
    <div class="banner">
        <div class="nextcir"></div>
        <div class="word">
            <div class="title tick">
                <h2>Keep reading,<br> and go with the flow</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum eos, laudantium corporis iste ut natus eum inventore, totam explicabo necessitatibus esse voluptates rem. Ipsum labore aspernatur voluptates id necessitatibus?</p>
                <button class="view tick">View more</button>
            </div>
            <div class="read"></div>
        </div>
        <div class="item tick">
            <div id="next" class="next tick" @click="right" @mouseenter="mouse" @mouseleave="mousel">next</div>
            <div class="thingbox">
                <div v-for="i in 5" :key="i" class="thing">
                    <div class="imag">
                        <img :src="require(`@/assets/image/king.jpg`)" alt="">
                    </div>
                    <p>Project 1</p>
                    <div class="gone">
                        <p>chayuan</p>
                        <div class="plus">
                            <i class="fa-solid fa-barcode"></i>
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
        let i = 1;
        let check = true;
        const right=()=>{
            const thingbox = document.querySelector(".thingbox");
            if(i<4){
                thingbox.style = `transition: transform 0.5s 0.1s ease-in-out;transform: translateX(-${20*i}%)`;
                i++;
                if(check==true){
                    growred();
                }else{
                    growyellow();
                }
                if(i==4){
                    setTimeout(()=>{
                        i=0;
                        thingbox.style = `transform: translateX(-${20*i}%)`;
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
                v.style="transition: 1s";
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
                v.style="transition: 1s";
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
        }
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main.scss";

*{
    // outline: solid 1px;
    font-family: 新細明體;
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
            }
            .view.tick{
                color: #333;
                box-shadow: 0px 0px 0px #333;
                border: solid 1px #333;
            }
            .view{
                width: fit-content;
                font-size: 28px;
                background-color: transparent;
                // border: solid 1px #333;
                border-radius: 30px;
                margin-left: 20px;
                padding: 5px 20px;
                box-sizing: border-box;
                position: relative;
                z-index: 1;
                // box-shadow: 0px 0px 0px #333;
                transition: 0.3s;
                // color: #333;
                &:hover{
                    transform: translate(-2px,-1px);
                    cursor: pointer;
                    box-shadow: 3px 2px 0px #333;
                }
                &:active{
                    transform: translate(-1px,0px);
                    box-shadow: 2px 1px 0px #333;
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
            width: 350%;
            height: 100%;
            // transition: 0.5s;
            .thing{
                box-sizing: border-box;
                padding: 20px;
                width: 70%;
                height: 100%;
                .imag{
                    height: 85%;
                    img{
                        padding: 20px;
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                p{
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
                    }
                    .plus{
                        width: 20%;
                        i{
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>