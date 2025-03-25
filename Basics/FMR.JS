const Nums = [1,2,3,4,5,6,7,8,9,10]
// filter
// let num = Nums.filter( (num)=> num > 5)

const newN = []

Nums.forEach( (num)=> {
    if(num > 4){
        newN.push(num)
    }

})

// console.log(newN)

const books = [
    {
        title: 'book1',
        user: true
    },
    {
        title: 'book2',
        user: false
    },
    {
        title: 'book3',
        user: true
    },
    {
        title: 'book4',
        user: false
    },
    {
        title: 'book5',
        user: true
    },
    {
        title: 'book6',
        user: false
    },
    {
        title: 'book7',
        user: true
    },
    {
        title: 'book8',
        user: false
    },
    {
        title: 'book9',
        user: true
    },
    {
        title: 'book10',
        user: false
    }
]




const UserBooks = books.filter( (book) => book.title === 'book1')

// console.log(UserBooks)
// map
const nom = [1,2,3,4,5,6,7,8,9,10]

// const ne = nom.map( (num) => num +10)
const ne = nom
.map( (num) => num *10)
.map( (num) => num -10)

// console.log(ne)

// reduce 



const nem = [1,2,3,4,5,6,7,8,9,10]

const sum = nem.reduce(function(acc,curr){
console.log(`acc is ${acc} and curr is ${curr}`)
return acc + curr
}
,0)

