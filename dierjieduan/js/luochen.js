$("#floor").children("ul").children("li").click(function(){
    var i = $(this).index();

    var now = $(".admin").eq(i);
    
    var t = now.offset().top;

    $("html").animate({
        scrollTop:t
    })
})