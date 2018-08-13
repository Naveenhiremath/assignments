window.onload=function()
{   var button=document.getElementById("btn");
    var str=document.getElementById("vi");
    var error=document.getElementById("output");
    var isvalid=function()
{
    var match=str.value.match(/[a-z]+/i);
    if(!match){
        error.innerHTML="enter the string";
    
    }else{
        error.innerHTML="";

    }
}
str.onkeyup=function(e)
{
   isvalid();
}
    button.onclick=function(){
    for(var i=0;i<str.length;i++){
if(str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))){
alert(str.charAt(i));
break;
}
    }

}
}
