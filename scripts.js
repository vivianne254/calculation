var add =function(number1,number2) {
    return number1 + number2;
};

var number1 =parseInt(prompt("Enter a number:"));
var number2 =parseInt(prompt("Enter another number:"));
var result = add(number1,number2);
alert(result);

var subtract =function(number1,number2) {
    return number1 - number2;

};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1,number2);
alert(result);

var multiplication = function(number1,number2) {
    return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiplication(number1,number2);
alert(result);

var division =function(number1,number2) {
    return number1 / number2;
};

var number1=parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = division(number1,number2);
alert(result);

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i,'christmass');
alert(newstr);
