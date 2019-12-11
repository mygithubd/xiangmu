class List{
    constructor(){
        this.url = "../json/spliebiao-shuju.json";
        this.cont = document.querySelector("#spzt ul");
        
        this.load()
        this.addEvent();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res)
            that.display();
        })
    }
    display(){
        var str = ""
        for(var i=0;i<this.res.length;i++){
            str += `<li index="${this.res[i].goodsId}">
                        <img src="${this.res[i].img}">
                        <em>${this.res[i].price}</em>
                        <a href="">${this.res[i].mingcheng}</a>
                        <b>文具1号超市</b>
                        <i class="mjs">满就送</i>
                        <span>已有<u>${this.res[i].pjrs}</u>人评价</span>
                        <i class="jiaruche">加入购物车</i>
                    </li>`;
        }
        this.cont.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "jiaruche"){
                that.id = target.parentNode.getAttribute("index");
                that.setCookie();
            }
        })
    }
    setCookie(){
        this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
        if(this.goods.length < 1){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var onoff = true;
            for(var i=0;i < this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1,
                })
            }
        }
        setCookie("goodsDECookie",JSON.stringify(this.goods))
    }
}
new List;
