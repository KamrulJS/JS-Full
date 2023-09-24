// const tinderUser = new Object() //singleton object
const tinderUser = {} // non-singleton

tinderUser.id = "2023ab";
tinderUser.name = "mk";
tinderUser.isLoogedIn = true;
// console.log(tinderUser);

const regularUser = {
    email: "mk@gmail.com",
    fullName: {
        userFullName: {
            first: "kamrul",
            last: "Islam"
        }
    }
}
console.log(regularUser.fullName.userFullName.first);

const obj1 = { 1: "aa", 2: "bb" }
const obj2 = { 3: "aa", 4: "bb" }
const obj3 = { 5: "aa", 6: "bb" }

// const obj4 = { obj1, obj2 };
const obj4 = { ...obj1, ...obj2 }; // 90% will use spread operator
const obj5 = Object.assign(obj1, obj2, obj3) // we will not use this

console.log(obj4);
console.log(obj5);

// -----------   very important  -----------
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));



//-------------------  " Distructuring"  --------------------

const course = {
    name: "web development",
    price: 909,
    instructor: "kamrul"
}

const { price, name, instructor } = course;
console.log(name, instructor, price);




