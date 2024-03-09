function addnumber(num1,num2){
    return num1+num2
}
const result = addnumber(2,4)
// console.log(result);



function login(userName){
    return `${userName} just logged in`
}
// console.log(login("ridhdhi"))   //ridhdhi just logged in
// console.log(login(""));         // just logged in
// console.log(login());           //undefined just logged in


function login1(userName = "abc"){
    return `${userName} just logged in`
}
// console.log(login1("ridhdhi"))   //ridhdhi just logged in
// console.log(login1());           //abc just logged in


function calculatePrice(...price){
    return price
}
// console.log(calculatePrice(12,33,44,555,66))   //[ 12, 33, 44, 555, 66 ]



//OBJECT PASS IN FUNCTION
const userDetail = {
    userName : "ridhdhi",
    age : 20
}
function userObject(detail) {
    return`UserName is : ${detail.userName} and age is : ${detail.age}`
}
console.log(userObject(userDetail));   //UserName is : ridhdhi and age is : 20



//ARRAY PASS IN FUNCTION
const myArr = [1,2,3,4,5,6]
function getSecondValue(getArr){
    return getArr[1]
}
console.log(getSecondValue(myArr));   //2



