// for (let i = 0; i <= 5; i++) {
//     const element = i;
//     console.log(element);
// }

// console.log("Kamrul Islam");

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//       console.log("5 is best number");
//     }
//     console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//         console.log();
//     for (let j = 0; j <= 10; j++) {
//         const element = j;

//     }
// }

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    console.log(`Detected value 5`);
    break;
  }
  console.log(`value of index ${index}`);
}

// -----------  while loop  ----------------

let myArray = ["kamrul", "Islam", "Mk"];
let index = 0;

while (index < myArray) {
  console.log(`value is ${myArray[index]}`);
  index = index + 3;
}



//  ============= do while loop ------------------


let score = 2

do {
    console.log(`score is ${score}`);   
    score++;
    
} while (score <= 20);


