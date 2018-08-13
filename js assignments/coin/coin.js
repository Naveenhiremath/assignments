window.onload = function(){
var button = document.getElementById("btn");
var output = document.getElementById("demo");
var amount = document.getElementById("amm");
var rupee10 = document.getElementById("rupee10");
var rupee5 = document.getElementById("rupee5");
var rupee2 = document.getElementById("rupee2");
var rupee1 = document.getElementById("rupee1");


var amountTocoins = function(amount, coins) 
{
if (amount === 0) 
{
return [];
} 
else
{
if (amount >= coins[0]) 
{
left = (amount - coins[0]);
return [coins[0]].concat( amountTocoins(left, coins) );
} 
else
{
coins.shift();
return (amount, coins);
}
}
} 
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));
button.onclick = function() {
var coins = [];
if(rupee10.checked) coins.push(10); 
if(rupee5.checked) coins.push(5);
if(rupee2.checked) coins.push(2);
if(rupee1.checked) coins.push(1);
var result = amountTocoins(amount.value, coins);
output.innerHTML = result;
}
}