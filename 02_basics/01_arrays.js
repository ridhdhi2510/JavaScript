const myarr = [1,2,3,4,5]
const arr = ["hardik","ridhdhi","haresh"]

// console.log(myarr);  //[ 1, 2, 3, 4, 5 ]
// console.log(arr);   //[ 'hardik', 'ridhdhi', 'haresh' ]
// console.log(myarr2);  //[ 2, 3, 4, 4, 5 ]

//arrays methods 
// myarr.push(3)  //Appends new elements to the end of an array, and returns the new length of the array.
// console.log(myarr)   //[ 1, 2, 3, 4, 5, 3 ]

// myarr.pop()   //Removes the last element from an array and returns it
// console.log(myarr)    //[ 1, 2, 3, 4, 5 ]

// myarr.unshift(9)    //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(myarr)  //[ 9, 1, 2, 3, 4, 5 ]

// myarr.shift()        //Removes the first element from an array and returns it
// console.log(myarr)   //[ 1, 2, 3, 4, 5 ]

const myarr2 = new Array(2,3,4,4,5)
// console.log(myarr2.includes(10));  //Determines whether an array includes a
//                                   // certain element, returning true or false as appropriate.
// console.log(myarr2.indexOf(4));   //Returns the index of the first occurrence of a value in an array, 
                                  //or -1 if it is not present.


const newarr = myarr2.join()
        // console.log(myarr2);  //[ 2, 3, 4, 4, 5 ]   type --> array
        // console.log(newarr);   //2,3,4,4,5          type -->string


//splice and slice
const arr3 = [1,2,3,4,5,6]
console.log(arr3.slice(1,3))
        //Returns a copy of a section of an array. For both start and end, 
        //a negative index can be used to indicate an offset from the end of the array. For example, 
        //-2 refers to the second to last element of the array.
console.log(arr3)

console.log(arr3.splice(1,3))
        //Removes elements from an array and, if necessary,
        // inserts new elements in their place, returning the deleted elements.
console.log(arr3)
