//IMMEDIATLY INVOKED FUNCTION EXPRESIONS(IIFE)

// -->GLOBLE SCOPE KE POLLUTION SE PROBLEM HOTI HAI KAHI BAR  TO JO GLOBLE SCOPE K VARIABLE HAI 
//    OR JO B DECLARATION HAI USKO HATANE K LITE IIFI KA USE KIYA 

//NAMED IIFE
(function one(){
    console.log("ridhdhi");
})();

//UNNAMED IIFE WITH PARAMETER
( (name)=>{
    console.log(`hello, ${name}`);
})("ridhdhi");   //when another IIFE function start after IIFE function that time mandatary  
                 // to put ;  after first IIFE function

//UNNAMED IIFE
( ()=>{
    console.log(`RIDHDHI`);
})()