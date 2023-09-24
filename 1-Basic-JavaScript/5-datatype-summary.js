
// Primitive Data Type

// 7 types of data type -
(String, number, boolean, null, undefined, Symbol, BigInt)


// ----------------- //

    
    
// Reference Data type or (non primitive)
(Array, Objects, functions)




const heros = ["sharukh khan", "salman"];
let myObj = {
    name: "kamrul",
    age: 25,
}

const myFunction = function () {
    console.log("kamrul function");
}



// if you want to check type of the data.
// then you can use 'typeof'
console.log(typeof heros); 





//  ----------------------------  Stack and Heap memory    ------------------------------------ //

// Stack and Heap memory in javascript

// Stack (primitive) and Heap (Non-primitive)



let myChannel = "kamrul-Channel";
let anotherChannel = "myChannel";

anotherChannel = "another-channel";


console.log(myChannel);
console.log(anotherChannel);


let user1 = {
    email: "user@gmail.com",
    city: "bangladesh-1210",
}
let user2 = user1; // here using just reference as a copy of user1
user2.city = "dhaka";   

console.log(user1);
console.log(user2);