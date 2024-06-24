let btn = document.querySelectorAll(".XO");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnX = true;

const winPatterns = [
                     [0, 1, 2],
                     [0, 3, 6],
                     [0, 4, 8],
                     [1, 4, 7],
                     [2, 5, 8],
                     [2, 4, 6],
                     [3, 4, 5],
                     [6, 7, 8]
                               ]; 

const disableBtn = () => {
    for(let b of btn){
        b.disabled = true;
    }
}

const enableBtn = () => {
    for (let b of btn){
        b.disabled = false;
        b.innerText = "";
    }
}

const resetGame = () => {
    turnX = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};


const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
         if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner is ", pos1Val);
            showWinner(pos1Val);
         }
    }
  }
};

btn.forEach((element) => {
    element.addEventListener("click", () => {

        if(turnX){
            element.innerText = "X";
            element.style.color = "crimson";
            turnX = false;
        }
        else{
            element.innerText = "O";
            element.style.color = "navy";
            turnX = true;
        }
        element.disabled = true;
        checkWinner();
    });
    
});

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame);