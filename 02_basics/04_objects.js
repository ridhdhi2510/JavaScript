// const User = new Object()   //singleton object
// const User = {}             //non singleton object
// console.log(User);          //both output are same 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "ridhhdi"
tinderUser.loggedIn = false

// console.log(tinderUser)  //{ id: '123abc', name: 'ridhhdi', loggedIn: false }


const detail = {
    "full name" :{
        "first name" : "ridhdhi",
        "last name" : "bhojani"
    },
    email : "ridhdhi@gmail.com",
    age : 18
}

// console.log(detail)
/*
{
  'full name': { 'first name': 'ridhdhi', 'last name': 'bhojani' },
  email: 'ridhdhi@gmail.com',
  age: 18
}
*/

// console.log(detail["full name"]["first name"]);  //ridhdhi


const obj1 ={
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3 = {
    5 : "e",
    6 : "f"
}

const obj4  = {obj1,obj2}
// console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj = Object.assign(obj1,obj2)   //obj1 is become target object and all souce copy in target 
                                       //to avoid this condition we can use target object is {}                                    
// console.log(obj)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const object = Object.assign({},obj2,obj3)  //now all copied into empty object {}
// console.log(object)  //{ '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const object1 = {...obj2,...obj3}  //best way to combine to object 
// console.log(object1); //{ '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'loggedIn' ]  type is array
// console.log(Object.values(tinderUser));  //[ '123abc', 'ridhhdi', false ]

console.log(Object.entries(tinderUser))  
        //Returns an array of key/values of the enumerable properties of an object
        //[ [ 'id', '123abc' ], [ 'name', 'ridhhdi' ], [ 'loggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('loggedIn'))   //true
            //Determines whether an object has a property with the specified name



const course = {
    courseName : "javaScript",
    price : 444,
    courseInstructor : "ridhdhi"
}

const{courseInstructor} = course
console.log(courseInstructor); //ridhdhi 

const{courseInstructor:instructor} = course
console.log(instructor);       //ridhdhi  