const user = {
    userName: "kamrul",
    price: 900,

    welcomeMessage: function () {
        // "this" means your current context 
        console.log(`${this.userName}, welcome to our course`);
    }
}
// user.welcomeMessage();
// user.userName = "mk";
// user.welcomeMessage();

// function hello() {
//     let kamrul = "world";
//     console.log(this.kamrul); // "this" not working in functions
// }

// hello()


// const users = function () {
//     let name = "Development";
//     console.log(name);
// }

const users = () => {
    let name = "Development";
    console.log(name);
}
// users()

// const one = (num1, num2) => {
//     return num1 + num2
// }

const one = (num1, num2) => (num1 + num2) // if have single line execute

console.log(one(50, 51));

