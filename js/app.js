'use strict';

let username = prompt("Enter your name") ;

console.log(username)

alert("Welcom to aboutme - " + username)


let answer1 = prompt ("Do you believe in ghosts? yes/no").toUpperCase();

switch (answer1){
    case 'yes':
        console.log('correct')
        break;
    case 'no':
        console.log('correct')   
        break;
        
       default:
           console.log('wrong answer')
           break; 
}

