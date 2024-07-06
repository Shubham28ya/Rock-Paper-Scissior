let userScore=0;
let compScore=0;
const msz=document.querySelector("#msg")
const choices=document.querySelectorAll(".choice")
const mszContainer=document.querySelector(".msg-container")
const userscore=document.querySelector("#user-score")
const compscore=document.querySelector("#comp-score")


const genComputerChoice=()=>{
const option=["Rock","paper","scissors"];
const randIdx= Math.floor(Math.random()*3);
return option[randIdx];
}

const drawGame=()=>{
    msz.innerText= "Game Was Draw. Play Again!"
    msz.style.background="grey"

}

const showWinner=(userWin)=>{
if(userWin){
    userScore++
    userscore.innerText= userScore;
    msz.innerText="Congratulation! You Won "
    msz.style.background="green"
    
}    
else{
    compScore++
    compscore.innerText= compScore;
    msz.innerText="Hard luck! you lose"
    msz.style.background="red"

}
}

const playGame=(userChoice)=>{
const compChoice=genComputerChoice();
if(userChoice===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
      userWin= compChoice==="paper"?false:true;
    } else if(userChoice==="paper"){
      userWin=  compChoice==="scissors"?false:true;
    }
    else{
     userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
} 

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})

