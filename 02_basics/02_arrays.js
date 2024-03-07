const arr = ["hardik","ridhdhi","haresh"]
const arr1 = ["nidhi","bhumi","umang"]

// arr.push(arr1)
// console.log(arr);  //[ 'hardik', 'ridhdhi', 'haresh', [ 'nidhi', 'bhumi', 'umang' ] ]

//concate
// console.log(arr.concat(arr1));  //[ 'hardik', 'ridhdhi', 'haresh', 'nidhi', 'bhumi', 'umang' ]

const newarr = [...arr,...arr1]
// console.log(newarr);   //[ 'hardik', 'ridhdhi', 'haresh', 'nidhi', 'bhumi', 'umang' ]

const ar = [1,2,3,[4,5],4,[3,[6,7],9]]
const nar = ar.flat(Infinity)  
      //Returns a new array with all sub-array elements concatenated into it
      // recursively up to the specified depth.
// console.log(nar);  //[1, 2, 3, 4, 5, 4, 3, 6, 7, 9]
const nar1 = ar.flat(1)
// console.log(nar1);   //[ 1, 2, 3, 4, 5, 4, 3, [ 6, 7 ], 9 ]


console.log(Array.isArray("ridhhdi"))  //false
console.log(Array.from("ridhdhi"))     //['r', 'i', 'd', 'h', 'd', 'h','i']
                        //Creates an array from an iterable object.
console.log(Array.isArray(Array.from("ridhdhi"))) //true
console.log(Array.from({name :"ridhdhi",sname :"bhojani"}))  //[]

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))  //[ 100, 200, 300 ]
                //Returns a new array from a set of elements.