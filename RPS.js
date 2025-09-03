let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorep = document.querySelector("#user-score");
let compscorep = document.querySelector("#comp-score");

const gencompchoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randint = Math.floor(Math.random() * 3);
    return options[randint];


};
const draw = () => {


    msg.innerText = "Draw play again";
    msg.style.backgroundColor = "#081b31";
}
const winner = (userwin, userchoice, compchoice) => {

    if (userwin) {
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText = `You won ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorep.innerText = compscore;
        msg.innerText = `You Lost  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) => {


    const compchoice = gencompchoice();


    if (userchoice === compchoice) {
        draw();
    }

    else {

        let userwin = true;
        if (userchoice === "rock") {


            userwin = compchoice === "paper" ? false : true;

        }
        else if (userchoice === "paper") {

            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }

        winner(userwin, userchoice, compchoice);

    }

};


choices.forEach((choice) => {

    const userchoice = choice.getAttribute("id")
    choice.addEventListener("click", () => {

        playgame(userchoice);

    });


});

