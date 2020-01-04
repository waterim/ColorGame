let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let RGB = document.querySelector("#RGB");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let pickedColor = pickColor();

RGB.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add squares
  squares[i].style.backgroundColor = colors[i];

  //add click listener
  squares[i].addEventListener("click", function() {
    let choosedColor = this.style.backgroundColor;
    message.textContent = "Correct";
    if (choosedColor === pickedColor) {
      changeColors(pickedColor);
      message.textContent = "Right";
      h1.style.backgroundColor = pickedColor;
    } else {
      message.textContent = "Try again";
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
      }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(length){
    let arrayOfCollors = [];
    for(let i = 0;i<length;i++){
        arrayOfCollors.push(randomColor())
    }
    return arrayOfCollors;

}

function randomColor(){
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    return "rgb("+r+", "+g+", "+b+")";
}

function randomNumber(){
    let random = Math.floor(Math.random() * 255 + 1);
    return random;
}
