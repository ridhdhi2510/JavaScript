//object literals
const jsuser = {
    name : "ridhdhi",
    age : 20,
    email : "ridhhdi@goggle.com",
    isLoggedIn : false,
    lastloginDay: ["monday","friday"]
 }

// console.log(jsuser.email);    //ridhhdi@goggle.com
// console.log(jsuser["email"]); //ridhhdi@goggle.com

jsuser.email = "ridhdhi@yahoo.com"
Object.freeze(jsuser)
        //Prevents the modification of existing property attributes and values,
        // and prevents the addition of new properties.
jsuser.email ="ridhdhi@ac.in"
// console.log(jsuser)


const detail ={
    name : "ridhdhi",
    age : 20 ,
    year : 3
}

detail.sem = 5

detail.greeting = function(){
    console.log("hello !!!");
}

// console.log(detail.greeting)   //[Function (anonymous)]
// console.log(detail.greeting())   //hello !!!

detail.greeting2 = function(){
    console.log(`hello !!!  ${this.name}`);
}
console.log(detail.greeting2())  //hello !!!  ridhdhi
console.log(detail)
    /*
    {
        name: 'ridhdhi',
        age: 20,
        year: 3,
        sem: 5,
        greeting: [Function (anonymous)],
        greeting2: [Function (anonymous)]
    }
    */
