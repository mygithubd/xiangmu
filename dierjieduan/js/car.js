class Car{
    constructor(){
        this.allcheck = document.querySelector("#allcheck");
        
        this.url = "../json/spliebiao-shuju.json";
        this.tbody = document.querySelector("#jiesuan tbody");

        this.pdgwcsfqx();
        
        this.addEvent();
        this.load()
    }
    load(){
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
        var str = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId === this.goods[j].id){
                    str += `<tr index="${this.res[i].goodsId}" danjia="${this.res[i].price}" class = "zsspdmz">
                                <td><input type="checkbox" class="check"></td>
                                <td><img src="${this.res[i].img}"/></td>
                                <td>${this.res[i].mingcheng}</td>
                                <td></td>
                                <td><input type="number" min="1" value="${this.goods[j].num}" class= "xjdjs"></td>
                                <td class="delete">删除</td>
                            </tr>`;
                }
            }
        }
        this.tbody.innerHTML = str;
        this.check = document.getElementsByClassName("check");
        this.jsdxj = document.getElementsByClassName("xjdjs");
        this.zsspdmz =document.getElementsByClassName("zsspdmz");
        this.pdsfdx();  
        for(var i =0;i <this.zsspdmz.length;i++){
            this.mydanjia = this.zsspdmz[i].getAttribute("danjia");
            this.mydanjiashuru = this.zsspdmz[i].children[4].children[0].value;
            this.zsspdmz[i].children[3].innerHTML = (this.mydanjia * this.mydanjiashuru).toFixed(2);
        }

    }
    addEvent(){
        var that = this;
        this.tbody.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "delete"){
                that.id = target.parentNode.getAttribute("index");
                target.parentNode.remove();
                that.changeCookie(function(i){
                    that.goods.splice(i,1);
                });
            }
        })
        
        this.tbody.addEventListener("input",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName == "INPUT"){
                that.id = target.parentNode.parentNode.getAttribute("index");
                that.changeCookie(function(i){
                    that.goods[i].num = target.value;
                })
            }
            if(target.className == "xjdjs"){
                that.xjdjxdz = target.value;
                that.spddj = target.parentNode .parentNode.getAttribute("danjia");
                target.parentNode .previousElementSibling.innerHTML = (that.xjdjxdz * that.spddj).toFixed(2);
            }
        })
    }
    changeCookie(cb){
        for(var i=0;i<this.goods.length;i++){
            if(this.id == this.goods[i].id){
                cb(i);
                break;
            }
        }
        setCookie("goodsDECookie",JSON.stringify(this.goods))
    }
    pdgwcsfqx(){
        var that  = this;
        this.allcheck.onclick = function(){
            if(that.allcheck.checked){
                for(var i = 0;i < that.check.length;i++){
                    that.check[i].checked = true;
                }
            }else{
                for(var i = 0;i < that.check.length;i++){
                    that.check[i].checked = false;
                }
            }
        }
    }
    pdsfdx(){ 
        var that = this;
        for(let i = 0;i < this.check.length;i++){
            this.check[i].onclick=function(){
                if(!that.check[i].checked){
                    that.allcheck.checked = false;
                }
                that.zhen=Array.from(that.check)
                if(
                    that.zhen.every(function(val){
                    return val.checked 
                })){
                    that.allcheck.checked = true;
                }
            }
        }
    }
}

new Car;