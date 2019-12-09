function setCookie(key,val,options){
    options = options || {};
    if(options.path){
        var e=";path="+options.path;
    }else{
        e="";
    }
    if(options.expires){
        var d=new Date();
        d.setDate(d.getDate() + options.expires)
        var p=";expires="+d;
    }else{
        p = "";
    }
    document.cookie=key+"="+val+e+p;
}



function removecookie(key){
options = options || {};
setCookie(key,val,{
    expires:-1,
    path:options.path
})
}


function getCookie(key,val,options){
var arr = document.cookie.split("; ");
for(var i =0;i < arr.length;i++){
    if(arr[i].split("=")[0] == key){
        return arr[i].split("=")[1]
    }
}
return "";
}