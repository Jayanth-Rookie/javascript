// for 

for (let i = 0; i < 10; i++) {
//    console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);
    }
}

// let ind = 0 
// while(ind <= 10){
//     // console.log(`Value of ind is ${ind}`)
//     ind = ind +1 ;
// }

let ind = 1;
do {
    // console.log(`Value of ind is ${ind}`)
    ind++

}while(ind <= 10)

    // Array loops

// for of 
const arr = ['john', 'jay', 'jane', 'jerry']

for(const ar of arr){
    // console.log(arr)
}


// console.log(map)



// for (const [key,value] of myobj) {
//     console.log(key, '=',value)

    
// }

const myobj = {
    'game1':'NFS',
    'game2':'GTA'
}
const ar = ['a','b','c']

const map = new Map()
map.set('IN',"India")
map.set('US',"United States") // not itratable
for (const key in map) {
    // console.log(`${key}`)
    // console.log(key)
        
}



code.forEach( function (item) {
    // console.log(item)
    
})

// code.forEach(  (item) => {
//     // console.log(item)

// })

function prme(item){
    // console.log(item)
}

code.forEach(prme)

code.forEach( (item,index,arr) =>
{
//   console.log(item,index,arr)
})

const myCode = [
    {
        lang:"javascript",
        name:"jay"
    },
    {
        lang:"javascript",
        name:"jay"
    },
    {
        lang:"javascript",
        name:"jay"
    },
]

myCode.forEach( (item) => {
    // console.log(item.lang)
})

// const code = ["js","python","java","c++"]


// const values = code.forEach( (item) => {
//    return item
// })

// console.log(values)

