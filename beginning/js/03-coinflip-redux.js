var coinFlip;
for(i=0;i<10;i++){
    coinFlip=Math.random();
    coinFlip=Math.round(coinFlip);
    if(coinFlip==0){
        window.console.log('Heads');
    }
    if(coinFlip==1){
        window.console.log('Tails');
    }
    window.console.log(' ');
}