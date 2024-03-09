const user = {
    userName : "ridhdhi",
    price : 499,
    welComeMessage : function(){
        // console.log(`${this.userName}, wecome to website`)
        // console.log(this)
        /*
        first time run
        {
            userName: 'ridhdhi',
            price: 499,
            welComeMessage: [Function: welComeMessage]
        }

        after change userName 
        {
            userName: 'hardik',
            price: 499,
            welComeMessage: [Function: welComeMessage]
        }
        */
    }
}
user.welComeMessage()   //ridhdhi, wecome to website
user.userName = "hardik"
user.welComeMessage()   //hardik, wecome to website
// console.log(this);   //{}


// function chai(){
//     let userName1 = "ridhdhi"
//     console.log(this.userName1);  //undefined
// }



// const chai = function(){
//     let userName1 = "ridhdhi"
//     console.log(this.userName1);  //undefined
// }


// const chai = () =>{  //ARROW FUNCTION
//     let userName1 = "ridhdhi"
//     console.log(this);  
// }
// chai()


// const addTwo = (num1,num2) =>{
//     return num1+num2   //Explicite return
// }
// console.log(addTwo(2,3));


// const addTwoNum = (num1,num2) => (num1+num2)   //implicite return  & not use {} bracket always use () bracket
// console.log(addTwoNum(2,3));

const ridhdhi = () => ({username : "ridhdhi"}) //without () bracket function return undefined
console.log(ridhdhi());