const name = "ridhdhi"
const repoCount = 30
// console.log(`my name is ${name} and my repoCount is ${repoCount}`)


const gameName = new String("ridhdhibhojani")
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)   //   {}
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf("d"))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-14,5)  
// console.log(anotherString)

const newString1 ="    ridhdhi    bhojanji    v"
// console.log(newString1)
// console.log(newString1.trim())  //remove starting space

const y = "ridhdhi bhojani"
// console.log(y.replace(' ',"_"))  
// console.log(y.includes('ridhdhi'))  // if ridhdhi is present in string --->true

const myName = "ridhdhi v. bhojani" 
console.log(myName.split(' '))  //split by ' ' and store in array