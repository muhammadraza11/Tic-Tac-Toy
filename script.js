const buttons = document.querySelectorAll(".box");
const winner = document.querySelector(".hide")
const winnerMsg = document.querySelector(".winnerMsg");
const newGameButton = document.querySelector(".NewGameButton");
const resetButton = document.querySelector(".resetBtn");
let counter = 0;
let turnx = true;

//Display turn value
buttons.forEach( (box) =>{
    box.addEventListener("click", () => {
        counter += 1;//count counter
    // chk turn 
        if (turnx == true) {
            box.innerHTML = "&#10003;";
            box.style.backgroundColor = "#F3C623";
            turnx =false;
        }else{
            box.innerHTML = "X";
            box.style.backgroundColor = "#EB8317";
            turnx = true;
        }
        box.disabled = true;
        chkWinner(winning_patterns);
        
    }) 
})

//Winning pattern Array
let winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Winner checking function
function chkWinner(winning_patterns) {
    for (const element of winning_patterns) {
        const pattern1 = buttons[element[0]].innerText;
        const pattern2 = buttons[element[1]].innerText;
        const pattern3 = buttons[element[2]].innerText;

        if(pattern1 != "" && pattern2 != "" && pattern3 != ""){
            if(pattern1 === pattern2 && pattern2 === pattern3){
                winnerMsg.innerText = `Player ${pattern1} won the Game`;
                winner.classList.remove("hide");
                disableBtn(true);
            }else if(counter === 9){
                counter = 0;
                winnerMsg.innerText = `Match Draw`;
                winner.classList.remove("hide");
            }
        }
    }
}

function resetBtn() {
    winner.classList.add("hide"); // Hide the winner message
    buttons.forEach((box) => {
        box.innerHTML = ""; // Clear the content of each button
        box.style.backgroundColor = ""; // Reset background color
        box.disabled = false; // Enable all buttons
    });
    counter = 0; // Reset counter
    turnx = true; // Reset turn to X
}

//disable (true) / Enable(false ) function
function disableBtn(val){
    for(let button of buttons){
        button.disabled = val;
   }
}