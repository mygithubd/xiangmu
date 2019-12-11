class erjicaidan{
    constructor(){
        $(".shu").children("li").mouseover(function(){
            $(this).children("ul").stop().show().parent().siblings().children("ul").stop().hide();
        });
        $(".shu").children("li").mouseout(function(){
            $(this).children("ul").stop().hide();
        });
    }
}
new erjicaidan;