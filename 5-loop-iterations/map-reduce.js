const coding = ['JS', 'python', 'java', 'C++', 'PHP'];

const values = coding.forEach((items) => {
    // console.log((items));
    return items // for-each not return anything from function or loop
})
// console.log(values);


// ----------  filter loop  ----------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = numbers.filter((num) => num > 6);
// const newNum = numbers.filter((num) => {
//     return num > 6  // scope {} open korle return korte hbe
// });
// console.log(newNum);



// --------------  exercise ------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
  
const useBook = books.filter((bk) => bk.genre === 'History');

const userBook = books.filter((bk) => {
    return bk.publish >= 1990 && bk.genre === "Non-Fiction"
})

// console.log(useBook);
// console.log(userBook);


// --------------------  MAP ------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const half = numbers.map((num) => {
    return num - 0.5
})

const mapping = numbers
    .map((num) => num * 20)
    .filter((num) => num >= 90)
    
                    

// console.log(mapping);
// console.log(half);



//  -------------   reducer   ------

const nums = [1, 2, 3, 4, 20, 25];

const total = nums.reduce(function (acc, currVal) {
    // console.log(` what is ${acc} and value ${currVal}`);
    return acc + currVal;
}, 0)

// console.log(total);


const myTotal = nums.reduce((acc, currVal) => acc + currVal, 20);
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "javascript",
        price: 5600
    },
    {
        itemName: "python",
        price: 4000
    },
    {
        itemName: "data science",
        price: 12000
    },
    {
        itemName: "mobile development",
        price: 25000
    },
]

const pay = shoppingCart.reduce((acc, items) => acc + items.price, 0)

console.log(pay);


 