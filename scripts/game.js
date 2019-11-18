//Board Game

playerTurn = {};

function rollDice() {
    let rollOutput = document.getElementById("rollOutput");
    //let roll = Math.ceil(Math.random()*max);
    let diceRoll = (Math.floor(Math.random() * 6) + 1);
    console.log("you rolled a " + diceRoll + "!");

    rollOutput.innerHTML = " You rolled a " + diceRoll + " !";

    // board mechanics
    (playerOne.turn === true) ? playerTurn = playerOne: playerTurn = playerTwo;
    
    if(playerOne.position != playerOne.position){
        document.getElementById('tile'+playerTurn.position).innerHTML="";
    }
    //dice mechanics
    if (diceRoll === 6) {
        alert('well done');
        playerTurn.position = playerTurn.position + diceRoll;
        rollDice()
    } 
    else {
        playerTurn.position = playerTurn.position + diceRoll;
        
        console.log(playerTurn.position);
        document.getElementById('tile'+playerTurn.position).innerHTML=`
            <img src="${playerTurn.token}">
        `;
    }
    //Switch players
    if (playerTurn.turn === true) {
        playerOne.turn = false;
        playerTwo.turn = true;
    } else {
        playerOne.turn = true;
        playerTwo.turn = false;
    }
    console.log(playerTurn);
    

}