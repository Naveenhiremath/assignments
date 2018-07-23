window.onload = function() {
var button = document.getElementById("btn");
var name = document.getElememtById("name");
var password =document.getElememtById("password");
button.onclick = function() {
console.log('clicked',name.value,password.value)
{if(!name.value)

	if(name.value && password.value)
	alert("success");
}else{
alert ("not success");
}

}
}
