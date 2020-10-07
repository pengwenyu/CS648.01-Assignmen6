var number1 = window.prompt("Enter the first number");
var number2 = window.prompt("Enter the second number");

if(number1 > number2){
    document.write('first number '+number1+' is larger');
}
else if (number1 < number2){
    document.write('second number '+number2+' is larger');
}
else{
    document.write('two number is euqal');
}