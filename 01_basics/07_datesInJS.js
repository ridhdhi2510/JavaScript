const myDate = new Date();
// console.log(myDate);

// console.log(typeof myDate);  //object
// console.log(myDate.toString()); //Wed Mar 06 2024 08:12:14 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString())  //Wed Mar 06 2024
// console.log(myDate.toISOString());   //2024-03-06T08:14:25.407Z
// console.log(myDate.toJSON());           //2024-03-06T08:14:25.407Z
// console.log(myDate.toLocaleDateString())   //  3/6/2024
// console.log(myDate.toLocaleString());    //   3/6/2024, 8:15:29 AM

const myCreatedDate = new Date(2023,0,4)  //month start from 0
// console.log(myCreatedDate.toDateString());

const myCreatedDate1 = new Date(2023,0,34,14,5)   
// console.log(myCreatedDate1.toLocaleString());    //  1/4/2023, 2:05:00 PM

const myCreatedDate2 = new Date("2023-01-14")  //   month start from 1
// console.log(myCreatedDate2.toLocaleString());  //  1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp);    //output in milisecond 
// console.log(Math.floor(myTimeStamp/1000));   //output in second

let newdate = new Date();
// console.log(newdate.getMonth()+1);   //corrent month 
// console.log(newdate.getDay());  //Gets the day of the week, using local time.
// console.log(newdate.getDate());  //Gets the day-of-the-month, using local time.
let x = newdate.toLocaleString('default',{
    weekday:"long"
})
console.log(x);
console.log();