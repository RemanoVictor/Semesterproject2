document.getElementById('result').innerHTML += sessionStorage.getItem("playerOne");
document.getElementById('player1').innerHTML += `<img src="${sessionStorage.getItem('icon')}">`;
document.getElementById('result2').innerHTML += sessionStorage.getItem("playerTwo");
document.getElementById('player2').innerHTML += `<img src="${sessionStorage.getItem('icon2')}">`;

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
        document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
    } else {
        if (playerOne.turn === true) {
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<img src="${playerTwo.token}"/>`;
        } else {                        
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<img src="${playerOne.token}"/>`;
        }
    }
    
    let diceRoll =(Math.floor(Math.random() * 6) + 1);
    document.getElementById("rollOutput").innerHTML = `${playerTurn.title}`+" rolled a " + diceRoll + " !";

    //dice mechanics
    if (diceRoll === 6) {
        alert(playerTurn.title + ' rolled a 6!');
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
            document.getElementById("tile" + playerTurn.tileNum).innerHTML =`<p>${playerTurn.tileNum}</p>`;
            playerTurn.tileNum = playerTurn.tileNum - trapOne.penalty;
            document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                <img src="${playerTurn.token}">
            `;          
        break;
        case   trapTwo.tileNum:
                alert(trapTwo.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML =`<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapTwo.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        case trapThree.tileNum:
                alert(trapThree.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML =`<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum + trapThree.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        case trapFour.tileNum:
                alert(trapThree.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML =`<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapFour.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        case trapFive.tileNum:
                alert(trapThree.message);
                document.getElementById("tile" + playerTurn.tileNum).innerHTML =`<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapFive.penalty;            
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
        break;
        default:          
      }
    } setTrap();

    if( playerTurn.tileNum >= 30){        
        alert(playerTurn.title + " is the winner! ");
        window.location = "http://127.0.0.1:5500/winner.html";
    }
    
    //Switch players
    if (playerTurn === playerOne) {        
        document.getElementById('player1Update').innerHTML = "";
        document.getElementById('player1Update').innerHTML += `<h2> ${playerTurn.title}</h2> <p> ${playerTurn.title} is on tile number:${playerTurn.tileNum}</p>`;        
        playerOne.turn = false;
        playerTwo.turn = true;
    } else {        
        document.getElementById('player2Update').innerHTML = "";
        document.getElementById('player2Update').innerHTML += `<h2> ${playerTurn.title}</h2> <p> ${playerTurn.title} is on tile number:${playerTurn.tileNum}</p>`;        
        playerTwo.turn = false;
        playerOne.turn = true;
    }
}

