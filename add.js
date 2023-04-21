'use strict'; 

alert("welcome to a stroger life")

function getname(){
    const username = prompt("what is your name");
    return username; 

}

let theirname = getname();


console.log(theirname);

document.write("welcome! " + theirname + "   We are here to help you on your journey. "); 


function lift(){
   const lift = prompt("what lift can we help you learn more about");
   return lift; 
}

let lifttype = lift();

console.log(lifttype);

document.write("lets see if we can help you lear more about  " + lifttype + ".");

alert("remember to practice good form" );

function ratemysite(){
   let rating = prompt("rate the site 1-5");
   let max = 0
   let gotmax=false
   while(rating>5 && rating<0){
    rating=prompt("rate the site 1-5");

    
}
//  else{
       while (!gotmax ) {
        if(max===5||rating===0){
            gotmax=true 
            break
        }
        max++
        rating-- 
        document.write('<img class="loopimg" src="flex.jpg"alt="aremflex"/>');
       }

//    }
}
 