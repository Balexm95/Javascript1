//VERY HARD
let userInput= prompt(" Pick an operation 1 - Addition, 2 - Subtraction, 3 - Multiplication or 4 - Division? Enter 1-4");


if(userInput == 1){
let x = prompt(" What number would you like to add?" );
let y = prompt(" add another number" );
let num1 = parseInt(x);
let num2 = parseInt(y);
add(num1,num2);
}

if(userInput == 2){
let x = prompt(" What number would you like to subtact?" );
let y = prompt(" from what other number" );
let num1 = parseInt(x);
let num2 = parseInt(y);
subtract(num1,num2);
}

if(userInput == 3){
let x = prompt(" What number would you like to Multiply?" );
let y = prompt(" by what other number?" );
let num1 = parseInt(x);
let num2 = parseInt(y);
multiply(num1,num2);
}

if(userInput == 4){
let x = prompt(" What number would you like to Divide?" );
let y = prompt(" from what other number?" );
let num1 = parseInt(x);
let num2 = parseInt(y);
divide(num1,num2);
}

function add(num1, num2){
    let result= (num1+num2); 
    console.log( 'The result of ' + num1 + ' + ' + num2 + ' = ' + result);
}

function subtract(num1, num2){
    let result=(num1 - num2);
    console.log( 'The result of ' + num1 + ' - ' + num2 + ' = ' + result);
}

function multiply(num1, num2){
    let result=(num1 * num2);
    console.log( 'The result of ' + num1 + ' * ' + num2 + ' = ' + result);
}

function divide(num1, num2){
     let result=(num1 / num2);
     console.log( 'The result of ' + num1 + ' / ' + num2 + ' = ' + result);
}
