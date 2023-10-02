// Generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

        
    }
    return color;
};
// console.log(randomColor());

let intervalId;
const startChangingColor = function () { 

    intervalId = setInterval(changingBgColor, 1000);
    function changingBgColor () {
        document.body.style.backgroundColor = randomColor();

    }
};
document.querySelector("#start").addEventListener('click', startChangingColor);


const stopChangingColor = function () { 
    clearInterval(intervalId)
};
document.querySelector("#stop").addEventListener('click', stopChangingColor);



