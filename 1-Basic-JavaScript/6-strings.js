const name = "kamrul islam"
const repoCount = 50

console.log(`Here is my full name ${name} and my main age count is ${repoCount}`);

const gameName = new String("kamrul");


console.log(gameName[0]);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

// some important methods
const newString = gameName.substring(0, 3); // this substring method will cut string 0-2, before 3
console.log(newString);

const sliceString = gameName.slice(0, 4);
console.log(sliceString);

const trimString = "     kamrulislam     ";
console.log(trimString.trim()); // trim will remove extra spaces in string

const replaceString = "https://www.youtube.com/watch?v=b3PSfoldtkA&ab_channel=OneManArmy";
console.log(replaceString.replace('watch', 'kamrul')); 


