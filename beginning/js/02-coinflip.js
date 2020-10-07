var choice = window.prompt("Heads or Tails");
var coinFlip= Math.random()*10;
coinFlip=Math.round(coinFlip);
//window.alert(coinFlip);
var coin;
var result;
if(coinFlip>5){
    coin="tails";
}
else{
    coin="heads";
}

if(coin==choice){
    result=true;
}
else{
    result=false;
}

if(result==true){
    window.alert('The flip was '+coin+' and you chose '+choice+'...you win!')
}
else{
    window.alert('The flip was '+coin+' and you chose '+choice+'...you lose!')
}