$(()=>{
    var imglist=["./src/topmainimg1.webp","./src/topmainimg2.jpeg","./src/topmainimg3.jpeg","./src/topmainimg4.jpeg"]
    var n=1;
    $('.topmainimg').hide()
    $('.topmainimg').fadeIn(1000)
    setInterval(()=>{
        console.log("hello")
        $('.topmainimg').css('background-image',`url("${imglist[n]}")`);
        $('.topmainimg').fadeIn(1000)
        setTimeout(()=>{
            $('.topmainimg').fadeOut(1000)
        },3000)
        if(n<3){
            n++
        }else{
            n=0
        }
    },4000)
    setTimeout(()=>{
        $('.topmainimg').fadeOut(1000)
    },3000)
})