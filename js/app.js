'use strict';

let name = prompt('Enter your name') ;

console.log('Your name is'name)


let answer1 = prompt ('Do you believe in ghosts? yes/no').toUpperCase();

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

