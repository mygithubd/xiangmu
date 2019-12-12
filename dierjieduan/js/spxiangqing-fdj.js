var wrap = document.querySelector(".title-a");
var box = document.querySelector(".title-a-1");
var bigArea = document.querySelector(".title-b");
var afangdajing=document.getElementById("fangdajing")
// var cuxiaojia = document.querySelector("#cuxiaojia")
// var sptpdly = document.querySelector("#sptpdly")
// var spdmz  = document.querySelector("spdmz")

// window.onload=function(){
//     cuxiaojia.innerHTML=""
// }

// afangdajing.addEventListener("mousemove",function(eve){
//     var e = eve || window.event;
//     var target = e.target || e.srcElement;
//     if(target.tagName == "IMG"){
//        $(".title-a-1")[0].style.display = "block";
//        $(".title-b")[0].style.display = "block";
//     }
// })






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
        this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
        this.display();
    }
    display(){
        console.log(this.goods)
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId === this.goods[j].id){
                    this.cuxiaojia.innerHTML  = this.res[i].price;
                    this.sptpdly.src = this.res[i].img;
                    this.spdmz.innerHTML = this.res[i].mingcheng;
                } 
            }
        }
        
    }
}
new Xrfdj;



/* <h2>商品详情</h2>
            <div class="fdjDEhezi title">
                <div class="sBox title-a">
                    <img src="https://www.wjyh.com/imgserver2/goods/i08/gQ7N5w16492410545.jpg" alt="">
                    <span class="title-a-1"></span>
                </div>
                <div class="bBox title-b"></div>

                <div class="spjies">
                    <h1>亚太森博 复印纸 A4 70克 5包/箱</h1>
                    <div class="jiage">
                        <div class="jiage-t">
                            <div class="jiage-t-l">
                                <span>促销<b>￥88.88</b></span>
                                <span>价格<u>￥159.50</u></span>
                            </div>
                            <div class="jiage-t-r">查看评论</div>
                        </div>
                        <div class="jiage-b">
                            <span>满就送</span>
                            <i>江浙沪皖满88元包邮</i>
                        </div>
                    </div>
                    <div class="peisong">
                        <span>配送</span>
                        <span>上海市市辖区静安区</span>
                        <span>快递:0.00</span>
                    </div>
                    
                    <div class="yangshi">
                        <div class="ys">
                            <span>颜色</span>
                            <b>白色</b>
                            <b>绿色</b>
                            <b>蓝色</b>
                        </div>
                        <div class="bz">
                                <span>包装</span>
                                <b>5包/箱</b>
                                <b>10包/箱</b>
                                <b>15包/箱</b>
                        </div>
                    </div>
                    <div class="gm">
                            <i id="">立即购买</i>
                            <i id="">加入购物车</i>
                    </div>

                    <div class="cn">
                        <span>服务承诺:</span>
                        <span>正品保障</span>
                        <span>增票服务</span>
                        <span>闪电发货</span>
                        <span>七天无理由退货</span>
                    </div>
                </div> 
            </div> */






            
            
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























