var coinFlip;
for(i=0;i<10;i++){
    coinFlip=Math.random();
    coinFlip=Math.round(coinFlip);
    if(coinFlip==0){
        document.write('Heads');
        document.write('<br>');
    }
    if(coinFlip==1){
        document.write('Tails');
        document.write('<br>');
    }
}