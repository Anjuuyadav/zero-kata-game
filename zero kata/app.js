let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbuttonn = document.querySelector("#newbutton");

let turn0 = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

];


const resetGame = () => {
  turn0 = true;
  enabledbtns();
  msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      box.classList.add("text0");
      turn0 = false;
    } else {
      box.innerText = "X";
      box.classList.add("textX");
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    drawGame();
  });

});

const disabledbtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enabledbtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}


const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbtns();
  

}

const checkWinner = () => {
  for (let pattern of winPatterns) {

    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos1val !== "") {
      if (pos1val === pos2val && pos2val == pos3val) {
        showWinner(pos1val);
        

      }
    }
  }
};




let count = 0;
const drawGame = () =>{
count++;
if (count === 9) {
  msg.innerText= "Match s Draw";
  msgContainer.classList.remove("hide");
  disabledbtns();
}
}




newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
