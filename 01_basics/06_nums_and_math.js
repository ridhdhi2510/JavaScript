const balence = new Number(100)
// console.log(balence)   // datatype --> number
// console.log(typeof(balence.toString()))  //datatype --> String
// console.log(balence.toFixed(3))  //3 digit after point

const newNumber = 123.8999
// console.log(newNumber.toPrecision(3));

const num = 10000000
// console.log(num.toLocaleString());  //10,000,000  coma-- in us standard mathod
// console.log(num.toLocaleString('en-IN'));  //1,00,00,000   coma-- in indian standard mathod


//-------------------------------------     MATHS     --------------------------------------------

// console.log(Math);    //Object [Math] {}
// console.log(Math.abs(-4)); // only negative value conver into positive

// console.log(Math.round(5.4))   //5
// console.log(Math.round(5.6))   //6

// console.log(Math.max(1,3,5,7,23));
// console.log(Math.min(1,2,3,4,5,6));

// console.log(Math.random());
// console.log(Math.random()*10+1)

const min=10
const max=20
console.log(Math.random() * (max-min+1)+min);
