for(i=1;i<=100;i++){
    var flag=0;
    if(i%3==0){
        flag=1;
    }
    if(i%5==0){
        flag=2;
    }
    if(i%5==0 && i%3==0){
        flag=3;
    }    
    if(flag==1){
        document.write(i+' Marco!'+'<br>');
    }else if(flag==2){
        document.write(i+' Polo!'+'<br>');
    }else if(flag==3){
        document.write(i+' Marco!Polo!'+'<br>')
    }
}