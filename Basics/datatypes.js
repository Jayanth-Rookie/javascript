// "use strict";

// console.log("jay");

// let name ="jay";
// let age = 25;
// let isApproved = true;

// // bigint
// //bool
// //string
// //null
// //undefined
// //object

// console.log(typeof name);

// let score = "100";

// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // conversion string to number 

// operations 

let value = 10;
let value2 = 20;

// console.log(2+2);
// console.log(value + value2);

let str1= "hey";
let str2 = "there";
let str3 = str1 + " " + str2;
// console.log(str3);

let count = 100;
count ++;
// console.log(count);

// console.log("2">1);
// console.log("2" ===1);

// refernce types 
// Arrays, Objects, Functions

const num = [1,2,3,4,5];

let myObj = {
    name: "jay",
    age: 25
}

const myFun = function(){
 console.log("hello");
}

// console.log(myFun);
// console.log(myObj);

let yt = "youtube";

let another = yt;
yt = "netflix"

// console.log(another);
// console.log(yt);

// strings

const name = "jay";
const repCount = 5;

// console.log(name + " " + repCount);

// console.log(`my name is ${name} and i have ${repCount} reps`);

//  console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));

const score = 4004596840;

const balance = new Number(200496804);
// console.log(balance.toFixed(2));
// console.log(balance.toLocaleString('en-IN'));

//Math

// console.log(Math)
// console.log(Math.abs(-100));
// console.log(Math.round(-100.54));

// console.log((Math.random()*10) +1);

const min =1;
const max =6;

// console.log(Math.floor(Math.random() * (max-min + 1) + min));

//dates

// let myDate = new Date("2022-04-28");

// console.log(myDate.toLocaleString());


// console.log(myDate.toLocaleString());

// myDate.toLocaleString('default', { 
//     month: "long",
// });

//arrays

let myArray = ["jay", "joe", "jane", "jill"];

// console.log(myArray[1]);

// //methods

// myArray.push("jim");
// myArray.pop();
// console.log(myArray.includes("ja"));

// console.log("A ",myArray)
// const arr1 = myArray.slice(1,3);

// console.log(arr1);
// console.log("B ",myArray);

// const arr2 = myArray.splice(1,3);

// console.log("C ",myArray);
// console.log(arr2);

const numb = [1,2,3,4,5,6,7,8,9,10];
const ch = ["a","b","c","d","e","f","g","h","i","j"];

const all = numb.concat(ch)
// numb.push(ch)

console.log(all);

const ot = [1,2,3,[4,5,6,],6,[5,8]]

const hmm = ot.flat()
console.log(hmm);

// .isArray()
// .from()
// .of()