const colorBox = document.querySelector("#color-box");
// JS for the gray button
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
    colorBox.className = "gray";
})
// JS for the blue button
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
    colorBox.className = "blue";
})

const pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
    colorBox.className = "pink";
})

let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
    let newcountValue = Number(countspan.innerHTML) +1;
    countspan.innerHTML = newcountValue;
})
const evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {

    if(countspan.innerHTML % 2 === 0){
        alert("Even");
    } else {
        alert("Odd")
    }
})