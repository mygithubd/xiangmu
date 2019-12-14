var wrap = document.querySelector(".title-a");
var box = document.querySelector(".title-a-1");
var bigArea = document.querySelector(".title-b");
var afangdajing=document.getElementById("fangdajing")


class Xrfdj{
    constructor(){
        this.cuxiaojia = document.querySelector("#cuxiaojia");
        this.sptpdly = document.querySelector("#sptpdly");
        this.spdmz  = document.querySelector("#spdmz")
        this.tbody = document.querySelector("#fangdajing .margin")
        this.url = "../json/spliebiao-shuju.json";
// this .img=id sptpdly 
        this.dkk();
    }
    dkk(){
        ajaxGet(this.url,(res)=>{
            this.res = JSON.parse(res);
            this.getCookie()
        })
    }
    getCookie(){
        this.goods = getCookie("Mymag") ? JSON.parse(getCookie("Mymag")) : [];
        this.display();
    }
    display(){
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId === this.goods[j].id){

                    this.cuxiaojia.innerHTML  = this.res[i].price;
                    this.sptpdly.src = this.res[i].img;
                    this.spdmz.innerHTML = this.res[i].mingcheng;
                    bigArea.style.backgroundImage = `url(${this.res[i].img})`;
                } 
            }
        }
        
    }
}
new Xrfdj();

   wrap.onmouseenter = function() {
                box.style.display = "block";
                bigArea.style.display = "block";

                var r = (wrap.clientWidth - box.clientWidth) / (800 - bigArea.clientWidth);
                
                document.onmousemove = function(e) {
            
                    var mouseX =  e.pageX;
                    var mouseY = e.pageY;
            
                    var elementX = offset(wrap).left;
                    var elementY = offset(wrap).top;
            
                    var resultX = mouseX - elementX - wrap.clientLeft - box.clientWidth / 2;
                    var resultY = mouseY - elementY - wrap.clientTop - box.clientHeight / 2;
                    if (resultX < 0) {
                        resultX = 0;
                    } else if (resultX > wrap.clientWidth - box.clientWidth) {
                        resultX = wrap.clientWidth - box.clientWidth;
                    }
            
                    if (resultY < 0) {
                        resultY = 0;
                    } else if (resultY > wrap.clientHeight - box.clientHeight) {
                        resultY = wrap.clientHeight - box.clientHeight;
                    }
                    box.style.left = resultX + "px";
                    box.style.top = resultY + "px";
                    bigArea.style.backgroundPositionX = -resultX / r + "px";
                    bigArea.style.backgroundPositionY = -resultY / r + "px";
                    
                }
            }
            wrap.onmouseleave = function() {
                box.style.display = "none";
                bigArea.style.display = "none";
            }
            
            
            function offset(dom) {
            
                var obj = {
                    left: 0,
                    top: 0
                }
            
            
                obj.left = dom.offsetLeft;
                obj.top = dom.offsetTop;
            
                var isIE8 = window.navigator.userAgent.indexOf("MSIE 8") != -1;
            
                var offsetParent = dom.offsetParent;
                while (offsetParent != document.body) {
                    if (isIE8) {
                        obj.left += offsetParent.offsetLeft;
                        obj.top += offsetParent.offsetTop;
                    } else {
                        obj.left += offsetParent.offsetLeft + offsetParent.clientLeft;
                        obj.top += offsetParent.offsetTop + offsetParent.clientTop;
                    }
                    offsetParent = offsetParent.offsetParent;
                }
                return obj;
            }


            class Ljjrgwc{
                constructor(){
                    this.oljjrgwc = document.querySelector("#ljjrgwc");
                    this.oljqsplb = document.querySelector("#ljqsplb");
                    this.jrgwc();
                }
                jrgwc(){
                    this.oljjrgwc.onclick=(function(){
                        location.href="car.html";
                    });
                    this.oljqsplb.onclick=(function(){
                        location.href="spliebiao.html";
                    })
                }
            }
            new Ljjrgwc;























