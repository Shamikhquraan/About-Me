'use strict';

let username = prompt("Enter your name") ;

console.log(username)

alert("Welcom to aboutme - " + username)





let answer1 = prompt ("Can you see Mars from your window? yes/no").toLowerCase();
function fun1(){
switch (answer1){
    case 'yes':
         alert("Wrong Answear")
         console.log('Wrong Answear')
        break;
        
    case 'no':
        alert("Correct Answear")
        console.log('Correct Answear') 
        break;
          
         
       default:
           alert ("No Answear!")
        break;
    
           
}
}
fun1();

let answer2 = prompt ("Can you make yourself disappear? yes/no").toLocaleLowerCase();
function fun2(){
switch (answer2)
{
case 'yes':
         alert("Wrong Answear")
         console.log('Wrong Answear')
        break;
        
    case 'no':
        alert("Correct Answear")
        console.log('Correct Answear') 
        break;
          
         
       default:
           alert ("No Answear!")
        break;
}
}
fun2();

let answer3 = prompt ("Can you see out the back of your head? yes/no").toLowerCase();
function fun3(){
switch (answer3)
{
    case 'yes':
             alert("Wrong Answear")
             console.log('Wrong Answear')
            break;
            
        case 'no':
            alert("Correct Answear")
            console.log('Correct Answear') 
            break;
              
             
           default:
               alert ("No Answear!")
            break;
    }
}
fun3();

let answer4 = prompt ("do you like bananas? yes/no").toLowerCase();
 function fun5(){

switch (answer4)
{
    case 'yes':
             alert("Greetings")
             console.log('Greetings')
            break;
            
        case 'no':
            alert("why!")
            console.log('why!') 
            break;
              
             
           default:
               alert ("No Answear!")
            break;
    }
 }
 fun5();


    // Do you know how to swim? yes/no




