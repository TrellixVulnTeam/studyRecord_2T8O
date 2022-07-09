$(()=>{
    $(".hamburger").click(()=>{
        $(".off").fadeToggle()
        $(".on").fadeToggle()
    })
    $(".top").fadeIn(1000)
})