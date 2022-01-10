//MEDIUM
let userInput = prompt("Are you YELLING, whispering, or talking normal?" );


function isUpperCase(userInput) {
    return userInput === userInput.toUpperCase();
}

function isLowerCase(userInput) {
    return userInput === userInput.toLowerCase();
}

function hasLowerCase(userInput) {
    return userInput.toUpperCase() != userInput;
}

if(isUpperCase(userInput)=== true){
    console.log('Why are you yelling?')
}

else if(isLowerCase(userInput)=== false){
    console.log('You are talking normal')
}

if(isLowerCase(userInput)=== true){
    console.log('Speak louder!')
}