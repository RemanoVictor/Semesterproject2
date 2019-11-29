document.getElementById('result').innerHTML += sessionStorage.getItem("playerOne");
document.getElementById('result2').innerHTML+= sessionStorage.getItem("playerTwo");

//Board Game

function rollDice() {
    
    let playerTurn = {};

    // board mechanics
    if (playerOne.turn === true) {
        playerTurn = playerOne;
    } else {
        playerTurn = playerTwo
    }

    // if players share a tile
    
    if (playerOne.tileNum !== playerTwo.tileNum) {        
        document.getElementById('tile' + playerTurn.tileNum).innerHTML = "";
    } else {
        if (playerOne.turn === true) {
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = "";
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<img src="${playerTwo.token}"/>`;
        } else {                        
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = "";
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<img src="${playerOne.token}"/>`;
        }
    }
    
    let diceRoll =(Math.floor(Math.random() * 6) + 1);
    //console.log("you rolled a " + diceRoll + "!");
    document.getElementById("rollOutput").innerHTML = " You rolled a " + diceRoll + " !";

    //dice mechanics
    if (diceRoll === 6) {
        alert('You rolled a 6!');
        playerTurn.tileNum = playerTurn.tileNum + diceRoll;
        rollDice()
    } else {
        playerTurn.tileNum = playerTurn.tileNum + diceRoll;
        document.getElementById('tile' + playerTurn.tileNum).innerHTML += `
            <img src="${playerTurn.token}">
        `;        
    }

    function setTrap(){
    switch(playerTurn.tileNum) {
        case  trapOne.tileNum:
            alert(trapOne.message);
            document.getElementById("tile" + playerTurn.tileNum).innerHTML ="";
            playerTurn.tileNum = playerTurn.tileNum - trapOne.penalty;
            document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                <img src="${playerTurn.token}">
            `;
          // code block
        break;
        case   trapTwo.tileNum:
                alert(trapTwo.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML ="";
                playerTurn.tileNum = playerTurn.tileNum - trapTwo.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
          // code block
        break;
        case trapThree.tileNum:
                alert(trapThree.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML ="";
                playerTurn.tileNum = playerTurn.tileNum + trapThree.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        case trapFour.tileNum:
                alert(trapThree.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML ="";
                playerTurn.tileNum = playerTurn.tileNum - trapFour.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        case trapFive.tileNum:
                alert(trapThree.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML ="";
                playerTurn.tileNum = playerTurn.tileNum - trapFive.penalty;            
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        default:
          // code block
      }
    } setTrap();
    
    //Switch players
    if (playerTurn === playerOne) {
        playerOne.turn = false;
        playerTwo.turn = true;
    } else {
        playerTwo.turn = false;
        playerOne.turn = true;
    }
}

