'use strict';

let username = prompt("Enter your name") ;

console.log(username)

alert("Welcom to aboutme - " + username)


let answer1 = prompt ("Do you believe in ghosts? yes/no").toUpperCase();

switch (answer1){
    case 'yes':
        break;
        console.log('correct')
        
    case 'no':
        break;
        console.log('correct')   
        
        
       default:
        break;
           console.log('wrong answer')
           
}

let answer2 = prompt ("Can you make yourself disappear? yes/no").toUpperCase();

switch (answer2){
    case 'yes':
        break;
        console.log('correct')
        
    case 'no':
        break;
        console.log('correct')   
        
        
       default:
        break;
           console.log('wrong answer')
           
}

let answer3 = prompt ("Can you see out the back of your head? yes/no").toUpperCase();

switch (answer3){
    case 'yes':
        console.log('correct')
        
    case 'no':
        console.log('correct')   
        
        
       default:
           console.log('wrong answer')
           
}

let answer4 = prompt ("Were you born in the summer? yes/no").toUpperCase();

switch (answer4){
    case 'yes':
        console.log('correct')
        
    case 'no':
        console.log('correct')   
        
        
       default:
           console.log('wrong answer')
           
}

let answer5 = prompt ("Do you know how to swim? yes/no").toUpperCase();

switch (answer5){
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


