var coinFlip;
do{
    coinFlip=Math.random();
    coinFlip=Math.round(coinFlip);
    if(coinFlip==0){
        document.write('Heads');
        document.write('\n');
    }
    if(coinFlip==1){
        document.write('Tails');
        document.write('\n');
    }
}while(coinFlip==0)