(function(){
    class Sjyz{
        constructor(){
            this.ayzm=document.querySelector(".zhengti .yzm span");
            this.banniu=document.querySelector(".zhengti .yzm b");

            this.load();
            this.display();
        }
        display(){
            var that =this;
            this.banniu.onclick=function(){
                that.load();
            }
        }
        load(){
            var str = "";
                for(var i=0;i<40;i++){
                    str += random(0,9);
                    str += String.fromCharCode(random(97,122));
                    str += String.fromCharCode(random(65,90));
                }
                var s=""
                for(var i=0;i<4;i++){
                    s += str[random(0,str.length-1)]
                }
                this.ayzm.innerHTML = s;
                function random(a,b){
                    return Math.round(Math.random()*(a-b))+b;
                }
            }
    }
    new Sjyz();
})()