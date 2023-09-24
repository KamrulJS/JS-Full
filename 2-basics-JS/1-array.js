// ------   Array   ------- //

const myArray = [0, 1, 12, 23, 4, 45, 6];
// const myHeros = [Sha, Mun, Lio, Deno];

const myNewArray = new Array(1, 2, 3, 4);
// console.log(myNewArray);


//  --------- array methods  ----
// myArray.push(56, 20) // add in array on the last
// myArray.pop(11, 22) // remove last element

myArray.unshift(56) // unshift added on the first
myArray.shift() // remove the first item in array


// console.log(myArray);
// console.log(myArray.includes(3));
// console.log(myArray.indexOf(45));


const joinArray = myArray.join();
// console.log(typeof joinArray);


// ----------    Slice  and splice   ---------------
console.log("A", myArray);
const myn1 = myArray.slice(1, 3);  // slice will not change main array

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3);  // splice will change main array
console.log("C", myArray);
console.log(myn2);




