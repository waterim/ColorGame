let squares = document.querySelectorAll(".square");
let RGB = document.querySelector("#RGB");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

//All Logic
let numberSquares = 6;
let colors = [];
let pickedColor;

//first running
init();

function init() {
  setupModeButtons();
  setupSquares();

  resetFunc();
}

reset.addEventListener("click", function() {
  resetFunc();
});

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(length) {
  let arrayOfCollors = [];
  for (let i = 0; i < length; i++) {
    arrayOfCollors.push(randomColor());
  }
  return arrayOfCollors;
}

function randomColor() {
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomNumber() {
  let random = Math.floor(Math.random() * 255 + 1);
  return random;
}

function resetFunc() {
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  RGB.textContent = pickedColor;
  h1.style.backgroundColor = "#78cff9";
  reset.textContent = "New colors";
  message.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "#78cff9";
}

function setupModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
    
          this.textContent === "Easy" ? (numberSquares = 3) : (numberSquares = 6);
          resetFunc();
        });
      }
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
          let choosedColor = this.style.backgroundColor;
          message.textContent = "Correct";
          if (choosedColor === pickedColor) {
            changeColors(pickedColor);
            message.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play again?";
          } else {
            message.textContent = "Try again";
            this.style.backgroundColor = "#232323";
          }
        });
      }
}
