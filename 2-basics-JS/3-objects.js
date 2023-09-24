// Object.create



// Object literals

const user = {
    name: "Kamrul",
    age: 25,
    location: "Dhaka",
    email: "kamrul@gmail.com",
    isLoogedIn: false,
    lastLoginDay: ["Mon", "Fri"]
}

// myArray = ["m", "l"];

// console.log(user.email);
// console.log(user["email"]);


user.greeting = function () {
    console.log("Hello User");
}

user.greetingOne = function () {
    console.log(`Hey user ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingOne());






