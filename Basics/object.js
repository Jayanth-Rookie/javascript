//singleton with constructors it will bw formed 
// object literal
const mys = Symbol("mySymbol");
const JsUser = {
    name: "jay",
    age: 25,
    [mys]: Symbol("hii")
}

// acessing is done through manly . and somrtimes [with " "]

// console.log(JsUser);
// JsUser.age = 17
// console.log(JsUser);
// console.log(JsUser.name);
// console.log(typeof JsUser[mys]); // This will now output 'symbol'

// JsUser.greeting = function (){
//     console.log(`hello ${this.name}`);
// }

// console.log(JsUser.greeting());

// singleton object

// const tind = new Object()

const tinder ={}
tinder.id = "2";
tinder.name = "jay";
// console.log(tinder);

const reguser = {
    email:"jay@gmail.com",
    fullname: {
        username:"jay",
        lastname:"hjk"
    }


}

// console.log(reguser.fullname.username);
// console.log(reguser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({},obj1, obj2)
// const obj3 = {...obj1, ...obj2} // spread operator
console.log(obj3);

const users = [
    {
        id:1,
        email:"ajt@gmail.com"
    }
]

// users[1].email
// console.log(tinder)
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

const course = {
    name:"js",
    price: "999",
    inst:"jay"
}
// object destructuring
const {inst} = course

// console.log(inst);

// {
//     "name":"jay",
//     "corname": "kan",
//     "price": "000"
// }

