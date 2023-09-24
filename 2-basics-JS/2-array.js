// -----  more about array
const marvel_Heros = ["thor", "iron man", "spider man"];
const dc_Heros = ["supperman", "flsah", "batman"];
const bolly_Heros = ["jawan", "pk", "lion"];

// marvel_Heros.push(dc_Heros);

// console.log(marvel_Heros[3][2]);



// ------- concat ------
const allHeros = marvel_Heros.concat("dc_Heros");
console.log(allHeros);


// ------ spread ----------
// spread operator used to combined multiple array in one array
const all_new_heros = [...marvel_Heros, ...dc_Heros, ...bolly_Heros];
console.log(all_new_heros);



// flat(Infinity) using to in one array under multiple array to convert single one array
const another_array = [1, 2, 5, 8, 3, [5, 15], 10, 22, [25, 8, [11, 22]], 55];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);



//----------------  isArray , from
console.log(Array.isArray("kamrulislam"));
console.log(Array.from("kamrulislam"));
console.log(Array.from({ name: "mkislam" })); // this case should define convert value or property in array

let one = 500;
let two = 400;
let three = 100;

console.log(Array.of(one, two, three)); // "of" use to multiple variable value convert to array
