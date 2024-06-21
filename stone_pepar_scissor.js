let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll (".choise");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoise = () =>{
    let opations = ["rock","pepar","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return opations[randIdx];
}

const drawGame = () => {
    console.log("The game is draw");
    msg.innerText = "Game was Draw ,Try Again";
    msg.style.backgroundColor ="#081b31";   

};

const showWinner = (userWin ,userChoise,compChoise) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText =`YOU WIN! Your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor ="green";   

     }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose ,${compChoise} bets your ${userChoise}`;
        msg.style.backgroundColor ="red";   
     }
}




const playtGame = (userChoise) =>  {
    console.log ("User Choise =",userChoise);
    //generate a computer choise 
    const compChoise = genCompChoise();
    console.log ("Comp Choise =",compChoise );

    if(userChoise === compChoise)
    {
        drawGame();
    }
    else {
        let userWin = true;
          if( userChoise === "rock")
          {
            userWin = compChoise === "pepar" ? false:true;
          }
          else if(userChoise === "pepar")
          {
              userWin = compChoise === "scissor" ? false:true ;
          }
          else{
            userWin = compChoise === "rock" ? false :true
          }
          showWinner(userWin,userChoise,compChoise);
    }   
};
 
choices.forEach((choise) => {
    console.log("choise");
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        playtGame(userChoise);

    });
});