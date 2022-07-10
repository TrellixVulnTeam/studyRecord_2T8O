$(()=>{
    var nowScroll=$(this).scrollTop();
    var contents=[".catchcopy",".goal",".summerGoal",".inYearGoal"]
    contents.forEach((i)=>{
        $(i).hide()
    })
    $(window).scroll(()=> {
        var scroll=$(this).scrollTop();
        // console.log(scroll)
        if(scroll<1000){
            if (scroll>nowScroll){
                $(".lowerRight").css("top",`-=${(scroll-nowScroll)/3}`)
                $(".topTitle").css({"top":`+=${(nowScroll-scroll)*3/11}`,"font-size":`+=${(nowScroll-scroll)/10}`})
            }else{
                $(".lowerRight").css("top",`+=${(nowScroll-scroll)/3}`)
                $(".topTitle").css({"top":`+=${(nowScroll-scroll)*3/11}`,"font-size":`+=${(nowScroll-scroll)/10}`})
            }
            nowScroll=scroll;
        }
        if(scroll>=1000){
            $(".lowerRight").css("top","8.6px")
            $(".topTitle").css({"top":"0.9px","font-size":"44.8px"})
        }
        if(scroll==0){
            $(".lowerRight").css("top","40vh")
            $(".topTitle").css({"top":"32vh","font-size":"17vh"})
        }
        var top=1000;
        contents.forEach((content)=>{
            if(scroll>=top+50 && scroll<=top+450){
                $(content).fadeIn()
            }
            if(scroll<top || scroll>top+500){
                $(content).fadeOut(100)
            }
            top+=500
        })
    });
})