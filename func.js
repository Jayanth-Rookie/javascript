// function sayMyName(){
//     console.log("h");
// }

function add(num1,num2){
    console.log(num1+num2);
}

function add(num1,num2){
   let result = num1+num2
   return result
}

// sayMyName();

const result =add(3,4)

// console.log(result); 

function login(username){
    if(username === undefined){
        return "Please provide a username"

    }
    return `${username} just logged in`
}

// console.log(login())

function calc(vaal1,val2,...num1) {
    return num1;
}

// console.log(calc(20,30,40))

const user = {
    username: "john",
    price: 500
}

function handle(obj){
    // console.log(`username is ${obj.username} and price is ${obj.price}`)
}

// console.log(handle(user))

const arra = [1,45,34,45]

function returnsec(arr){
    return arr[2]
}

// console.log(returnsec(arra))

// scopes 

function one(){
    const username = "john"

    function two()
    {
        const web = "youtube"
        console.log(username)
    }
    // console.log(web)

    // two()
}
one()

if(true) {
    const username = "jayanth"
    if(username === "jayanth"){
        const webd= "youtube"
        // console.log(username+ webd)
    }
    // console.log(webd)
}

// console.log(username)
// he(3) // error hoisting
const he = function add(num1){
    return num1+1;
}

// arrow functions

// this *

const user1 = {
    username: "john",
    price: 500,

    welcomeMessage: function(){
        // console.log(`${this.username} just logged in`)


}
}

user1.welcomeMessage()
user1.username = "jay"
user1.welcomeMessage()

// function chao(){
//     console.log(this.username)
// }

// chao()

// const bella = () => {
//     let usern ="hire"
//     console.log(this)
// }

// bella()

 const addtwo =(num1,num2) => {
    return num1+num2
 }
// {} = use returnn
// () = use no returnn
//  console.log(addtwo(3,5))

//IIFE

(function che(){
    console.log("hello")
})();// to avoid global scope pollution // named iife

( (name) => {
    console.log(`hello ${name}`)
})('jayanth')