const coding = ['JS', 'python', 'java', 'C++', 'PHP'];

coding.forEach( (items) => {
    // console.log(items);
})


const myCoding = [
    {
        languageName: "javaScript",
        framework: "react",
    },
    {
        languageName: "python",
        framework: "django",
    },
    {
        languageName: "php",
        framework: "laravel",
    },
]

myCoding.forEach((items) => {
    console.log(`here is language ${items.languageName} and here is framework ${items.framework}`);
})




