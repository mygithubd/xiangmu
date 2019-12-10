class Index{
    constructor(){
        this.login = document.querySelector(".weidl");
        this.welcome = document.querySelector(".yidl");
        this.user = this.welcome.querySelector("#dldts");
        this.exit = this.welcome.querySelector("em");
        
        this.getMsg();
        this.addEvent()
    }
    addEvent(){
        var that = this;
        this.exit.onclick = function(){
            that.msg[that.i].onoff = "0";
            setCookie("userMsg",JSON.stringify(that.msg));
            location.reload();
        }
    }
    getMsg(){
        this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
        
        this.i = null; 
        var type = this.msg.some((val,idx)=>{
            this.i = idx;
            return val.onoff === 1;
        })
        
        if(type){
            this.login.style.display = "none";
            this.welcome.style.display = "block";
            this.user.innerHTML = this.msg[this.i].user;
        }
    }
}

new Index;