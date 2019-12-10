class Register{
    constructor(){
        this.phone = document.getElementById("phone")
        this.user = document.getElementById("user")
        this.pass = document.getElementById("pass")
        this.queripass = document.getElementById("queripass")
        this.zhuce = document.getElementById("zhuce")
        this.span = document.getElementById("cwts");
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.zhuce.onclick = function(){
            that.q = that.queripass.value;
            that.p = that.phone.value;
            that.u = that.user.value;
            that.p = that.pass.value;
            
            that.setMsg();
        }
    }
    setMsg(){
        this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
        if(this.msg.length<1){
            this.msg.push({
                queripass:this.q,
                phone:this.p,
                user:this.u,
                pass:this.p,
                onoff:0
            })
            this.success();
        }else{
            var type = this.msg.some((val,idx)=>{
                return val.user === this.u;
            });
            if(type){
                this.span.innerHTML = "用户名重复";
            }else{
                this.msg.push({
                    queripass:this.q,
                    phone:this.p,
                    user:this.u,
                    pass:this.p,
                    onoff:0
                })
                this.success();
            }
        }
        setCookie("userMsg",JSON.stringify(this.msg));
    }
    success(){
        this.span.innerHTML = "注册成功，3秒后<a href='login.html'>跳转到登录</a>";
        setTimeout(()=>{
            location.href = "login.html";
        },3000)
    }
}

new Register;






































