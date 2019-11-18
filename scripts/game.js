//Board Game
playerTurn = {};

function rollDice() {

    //let roll = Math.ceil(Math.random()*max);
    let diceRoll = (Math.floor(Math.random() * 6) + 1);
    console.log("you rolled a " + diceRoll + "!");
    let rollOutput = document.getElementById("rollOutput");

    rollOutput.innerHTML = " You rolled a " + diceRoll + " !";

    // board mechanics
    if (playerOne.turn === true) {
        playerTurn = playerOne;
    } else {
        playerTurn = playerTwo
    }

    if (playerTurn.tileNum != playerTurn.tileNum) {
        document.getElementById('tile' + playerTurn.tileNum);
    }

    console.log(playerTurn);


    //dice mechanics
    if (diceRoll === 6) {
        alert('well done');
        playerTurn.tileNum = playerTurn.tileNum + diceRoll;
        rollDice()
    } else {
        playerTurn.tileNum = playerTurn.tileNum + diceRoll;

        console.log(playerTurn.tileNum);
        document.getElementById('tile' + playerTurn.tileNum).innerHTML = `
            <img src="${playerTurn.token}">
        `;
    }

    //Switch players
    if (playerTurn === playerOne) {
        playerOne.turn = false;
        playerTwo.turn = true;
    } else {
        playerTwo.turn = false;
        playerOne.turn = true;
    }






}