const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('Async');
        resolve()

    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2")
    }, 2000)
}).then(function(){
    console.log("fdh")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"jay", email:"sdg@dsf"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
 setTimeout(function(){
    let error =false
    if(!error){
        resolve({username:"jay", email:"sdg@dsf"})
    } else {
        reject('Eroorroror')
    }
},1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
  console.log(username)
})
.catch(function(error){
    console.log('erre')
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"jayij", email:"sdg@dsf"})
        } else {
            reject('Eroorroror')
        }
    },1000)
})

async function consumePromiseFive(){
    try{const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()
